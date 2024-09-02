const express = require("express");
const { sequelize } = require("./models");
const userRoutes = require("./routes/userRoutes");
const homeRoutes = require("./routes/homeRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:5173', // Replace with your frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
app.use(express.json());

app.use("/user", userRoutes);
app.use("/home", homeRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
