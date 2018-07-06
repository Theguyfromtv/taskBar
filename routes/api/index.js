const router = require("express").Router();
const userRoutes = require("./user.js");


//add the user routes uner the user slice
router.use("/user", userRoutes);

module.exports = router;
