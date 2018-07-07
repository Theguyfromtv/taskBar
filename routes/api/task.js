const taskController= require("../../controllers/task.js")
const router = require("express").Router();

//sign up route using the usercontroller
router.post('/new', taskController.addNew)

//log in route using the usercontroller
router.post('/edit', taskController.editTask)

//route to get the user on load, using the usercontroller
router.post('/done', taskController.taskDone)

router.post('/delete', taskController.deleteTask)

module.exports = router;
