const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    name : {
        type : string,
        default : "anonymous",
        min: 2,
        max :100,
    },
    email : {
        type : string,
        min :2,
        max :100,
        match : 
    }
})