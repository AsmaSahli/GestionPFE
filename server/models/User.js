const mongoose = require("mongoose");

const UserSchema =new mongoose.Schema(
    {
        nom:
        {
            type:String,
            required:true

        },
        prenom:
        {
            type:String,
            required:true

        },
        niveau:
        {
            type:String,
            default:"L3"
        },
        class:
        {
            type:String,
            required:true
        },
        option:
        {
            type:String,
            required:true
        },

        role:
        {
            type:String,
            required:true
        },
        email:
        {
            type:String,
            required:true,
            unique:true 
        },

        password:
        {
            type:String,
            required:true,
        }




    },{ timestamps: true });

    const User =mongoose.model("User",UserSchema);
    module.exports=User;
