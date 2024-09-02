const { User, Home, UserHome } = require("../models");
const sequelize = require("../config/config");
exports.findHomesByUser = async (req, res) => {
  try {
    const { page = 1 } = req.query; // Default page is 1 if not specified
    const pageSize = 10; // Define the page size
    const offset = (page - 1) * pageSize;
    const homes = await Home.findAll({
      include: {
        model: User,
        where: { id: req.params.userId },
        through: { attributes: [] },
      },
      limit: pageSize,
      offset: offset,
    });

    const totalHomes = await Home.count({
      include: {
        model: User,
        where: { id: req.params.userId },
        through: { attributes: [] },
      },
    });
    console.log({
      homes,
      totalPages: Math.ceil(totalHomes / pageSize),
      currentPage: parseInt(page),
    });
    res.json({
      homes,
      totalPages: Math.ceil(totalHomes / pageSize),
      currentPage: parseInt(page),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUsersForHome = async (req, res) => {
  try {
    const { homeId, interestedUsers } = req.body;

    // Validate input
    if (!homeId || !Array.isArray(interestedUsers)) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    // Check if the home exists
    const home = await Home.findByPk(homeId);
    if (!home) {
      return res.status(404).json({ message: "Home not found" });
    }

    // Get existing users associated with this home
    const existingUsers = await UserHome.findAll({
      where: { home_id: homeId },
      attributes: ["user_id"],
    });
    const existingUserIds = existingUsers.map((relation) => relation.user_id);

    // Determine users to add and remove
    const usersToAdd = interestedUsers.filter(
      (userId) => !existingUserIds.includes(userId)
    );
    const usersToRemove = existingUserIds.filter(
      (userId) => !interestedUsers.includes(userId)
    );

    // Start a transaction for safe data manipulation
    await sequelize.transaction(async (transaction) => {
      // Remove users that are no longer associated
      if (usersToRemove.length > 0) {
        await UserHome.destroy({
          where: {
            home_id: homeId,
            user_id: usersToRemove,
          },
          transaction,
        });
      }

      // Add new users
      if (usersToAdd.length > 0) {
        const newRelations = usersToAdd.map((userId) => ({
          home_id: homeId,
          user_id: userId,
        }));
        await UserHome.bulkCreate(newRelations, { transaction });
      }
    });

    // Return success response
    res.status(200).json({ message: "User associations updated successfully" });
  } catch (error) {
    console.error("Error updating user-home relationships:", error);
    res.status(500).json({
      message: "An error occurred while updating user-home relationships",
    });
  }
};
