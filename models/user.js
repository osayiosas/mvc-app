const mongoose = require("mongoose");
const userSchema = new mongoose.schema({
    name:{
        type: String,
        required: true,
    },

    email: {
        type: String,
        required:true,
    },

    password: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        default: "Lagos",
    },

    date: {
        type: String,
        default: Date.now,
    }
});

const User = mongoose.model("User", userSchema);
module.export = User;