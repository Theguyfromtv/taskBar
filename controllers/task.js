const User=require('../models/user.js')


const taskController={}

taskController.addNew=(req,res)=>{
    const task= {title:req.body.title,description:req.body.description,done:false}
    User.findByIdAndUpdate(req.body.id,{$push:{tasks:task}},(err,user)=>{
        if (err) throw err
        res.json({user:user})
        
    })
}

taskController.editTask=(req,res)=>{
    User.findOneAndUpdate({"_id":req.body.uid, "tasks._id":req.body.tid}, {$set:{title:req.body.title,description:req.body.description,done:false}}, (err,user)=>{
        if (err) throw err
        res.json({user:user})
    })

}

taskController.taskDone=(req,res)=>{
    User.findByIdAndUpdate({"_id":req.body.uid, "tasks._id":req.body.tid},{$set:{done:true}}, (err,user)=>{
        if (err) throw err
        res.json({user:user})
    })
}

taskController.deleteTask=(req,res)=>{
    User.findByIdAndRemove({"_id":req.body.uid, "tasks._id":req.body.tid},(err,user)=>{
        if (err) throw err
        res.json({user:user})
    })
}


module.exports=taskController