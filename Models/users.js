const { Schema } = require("mongoose");

const userModel = new Schema(
    {
       upn : String,
       firstName : String,
       lastName : String,
       email : String,
       roles : [String],
       password : String
    }
);