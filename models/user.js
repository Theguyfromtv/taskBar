
//require mongoose
const mongoose = require("mongoose");
//rquire bycrypt for hashing and salting passwords
bcrypt = require('bcrypt')


// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the UserSchema- a username, a password and an array of tasks 
const UserSchema = new Schema({  
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type:String,
    required: true
  },
  tasks: [{title: {type: String, required: true}, description:  {type: String, required: true}, done:  {type: Boolean, required: true}, dueDate:  {type: String, required: true}}]
},
{
  timestamps: true
});

//adding a prehook to the schema every time it saves
UserSchema.pre('save', function(next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

//create a function to compare the passwords using bycrypt
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


//create a model from the userschema
let User = mongoose.model('User', UserSchema);

//export the model
module.exports=User