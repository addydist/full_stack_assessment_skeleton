const { User, Home } = require("../models");

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    // console.log(users)
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};
exports.findUsersByHome = async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Home,
        where: { id: req.params.homeId },
        through: { attributes: [] },
      },
    });
    const home = await Home.findOne({
      where: { id: req.params.homeId }, // Use the homeId from the request parameters
      attributes: ["street_address"], // Assuming 'address' is the field name for the home's address
    });
    const address = home.street_address;
    console.log(address);
    // Extract user IDs
    const interestedUser = users.map((user) => user.id);

    res.json({
      interestedUser: interestedUser,
      address: address,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
