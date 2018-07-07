const User=require('../models/user.js')


const taskController={}

taskController.addNew=(req,res)=>{
    const task= {title:req.body.title,description:req.body.description,dueDate:req.body.dueDate}
    User.findByIdAndUpdate(req.body.id,{$push:{tasks:task}},{new: true},(err,user)=>{
        if (err) throw err
        res.json({user:user})
        
    })
}

taskController.deleteTask=(req,res)=>{
    User.findById({_id:req.body.uid},(err,user)=>{
        if (err) throw err
        user.tasks.id(req.body.tid).remove()
        user.save((err,savedUser)=>{
            if (err) throw err
            res.json({user:savedUser})
        })
    })
}


module.exports=taskController