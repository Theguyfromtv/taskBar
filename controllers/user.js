const User=require('../models/User')

const userController={}

userController.signUp=(req, res)=>{
    User.create({username:req.body.username, password:req.body.password}, (err,user)=>{
        if (err) throw err
        res.redirect('/tasks')
    })
}