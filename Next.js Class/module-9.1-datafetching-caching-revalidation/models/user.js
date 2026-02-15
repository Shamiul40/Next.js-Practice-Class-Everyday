const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    name : {
        type : "string",
        default : "anonymous",
        min: 1,
        max :70,
    },
    email : {
        type : "string",
        min :2,
        max :70,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
})


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User ; 