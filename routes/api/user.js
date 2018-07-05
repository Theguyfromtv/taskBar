const userController= require("../../controllers/user.js")
const router = require("express").Router();

//sign up route using the usercontroller
router.post('/signup', userController.signUp)

//log in route using the usercontroller
router.post('/login', userController.logIn)

//route to get the user on load, using the usercontroller
router.post('/getuser', userController.getUser)

module.exports = router;
