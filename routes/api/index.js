const router = require("express").Router();
const userRoutes = require("./user.js");
const taskRoutes = require("./task.js")


//add the user routes uner the user slice
router.use("/user", userRoutes);
router.use("/task", taskRoutes)

module.exports = router;
