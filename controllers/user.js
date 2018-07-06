const User=require('../models/user.js')
const bcrypt=require('bcrypt')

const userController={}

//when a user signs up, we create a new user document using the user schema
userController.signUp=(req, res)=>{
    User.create({username:req.body.username, password:req.body.password}, (err,user)=>{
        //handle errors
        if (err) {
            console.log(err)
        }
        else if(user){
            //if everything is kosher, we set the user as the session and the user is redirected to the main page
            req.session.user=user
            req.session.save()
            //console.log(req.session.user)
            res.json({user:true})        
        }else{
            res.json({error:"username already in use"})
        }

    })
}

//when a user logs in, we find that user in the database
userController.logIn=(req, res)=>{
    console.log("What's going on???!")
    User.findOne({username:req.body.username}, (err, user)=>{
        //handle errors
        console.log("user: ")
        if (err) throw err
        //if there isn't a user we send back a false boolean
        else if(!user){
            res.json({error:"can't find that username"})
        //otherwise we use bcrypt to compare the passwords
        }else{
           bcrypt.compare(req.body.password, user.password,(err, isMatch)=>{
                if (err) throw err
                //if there's a match we set the session as the user and redirect
                if (isMatch){
                    req.session.user=user
                    req.session.save(()=>{
                        console.log("this is the login")
                        console.log(req.session.user)
                        res.json({user:true})  
                    })
                          
                }else if (!isMatch){
                    //otherwise send back an error
                    res.json({error:"wrong password"})
                }

           })
        }

    })
}

//this controller is in charge of checking if there's an active session- if there is, the user object is sent back, if there isn't, it just sends back false
userController.getUser=(req, res)=>{
    console.log("getUser: "+req.session.user)
    //if there's a session, find the user in the db and send it back
    if(req.session.user){
        User.findOne({_id:req.session.user._id},(err, user)=>{
            console.log("finding user")
            //handle errors
            if (err) console.log(err)
            if(user){
                res.json({user:user})
                //console.log(user)
            }
        })
    //otherwise send back the user as false
    }else{
        res.json({user:false})
    }
}

//and it's time to give them the option to log out
userController.logOut=(req,res)=>{
    //set the session to null, effectively logging out the user and deleting the local cookie that held the session
    req.session.destroy((err)=>{
        if (err) throw err
        res.clearCookie("connect.sid")
        res.json({user:false})
    })
}

module.exports=userController