const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:hx220903@cluster0.fkjkl0y.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    }
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Bank", accountSchema);

module.exports = ({
    User, Account
})