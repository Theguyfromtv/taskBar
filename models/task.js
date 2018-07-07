//require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

//create a task schema- title, description, and a done bool
const TaskSchema = new Schema({
    title: {
        type: String, 
        required: true
    }, 
    description:  {
        type: String, 
        required: true
    }, 
    dueDate:  {type: String, 
        required: true
    }
})



//export the schema
module.exports=TaskSchema

