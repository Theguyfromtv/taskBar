const taskController= require("../../controllers/task.js")
const router = require("express").Router();

router.post('/new', taskController.addNew)

router.post('/delete', taskController.deleteTask)

module.exports = router;
