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
        cin:
        {
            type:String,
            required:true,
            unique:true 

        },


        option:
        {
            type:String,
        },

        role:
        {
            type:String,
            required:true
        },

        password:
        {
            type:String,
            required:true,
        }




    },{ timestamps: true });

    const User =mongoose.model("User",UserSchema);
    module.exports=User;
