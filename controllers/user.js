const User=require('../models/user.js')

const userController={}

//when a user signs up, we create a new user document using the user schema
userController.signUp=(req, res)=>{
    User.create({username:req.body.username, password:req.body.password}, (err,user)=>{
        //handle errors
        if (err) console.log (err)
        if(user){
            //if everything is kosher, we set the user as the session and the user is redirected to the main page
            req.session.user=user
            console.log(req.session.user)
            res.redirect('/tasks')
        }else{
            res.json({err:err})
        }

    })
}

//when a user logs in, we find that user in the database
userController.logIn=(req, res)=>{
    User.logIn(req.body.username, req.body.password, (err, user)=>{
        //handle errors
        if (err) throw err
        //if there isn't a user we send back a false boolean
        else if(!user){
            res.json({user:false})
        }else{
            //if everything is kosher, the logged in user is redirected to the main page and we set their id as the session
            req.session.user=user
            res.redirect('/tasks')
        }

    })
}

//this controller is in charge of checking if there's an active session- if there is, the user object is sent back, if there isn't, it just sends back false
userController.getUser=(req, res)=>{
    //console.log("getting user")
    //if there's a session, find the user in the db and send it back
    console.log(req.session.user)
    if(req.session.user){
        User.findOne({_id:req.session.user._id},(err, user)=>{
            //console.log("finding user")
            //handle errors
            if (err) throw err
            res.json({user:user})
        })
    //otherwise send back the user as false
    }else{
        res.json({user:false})
    }
}

//and it's time to give them the option to log out
userController.logOut=(req,res)=>{
    //set the session to null, effectively logging out the user
    req.session=null
    res.json({user:false})
}

module.exports=userController