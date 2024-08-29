const mongoose = require("mongoose");
const { mockItems } = require("./itemList");
require('dotenv').config();

// mongoose.connect("mongodb+srv://admin:hx220903@cluster0.fkjkl0y.mongodb.net/walmart");
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Failed to connect to MongoDB', err));


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
});

const itemSchema = new mongoose.Schema({
    id: String,
    quantity: Number,
    company: String,
    name: String,
    aisle: String,
    price: Number,
    blockNo: Number
})

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

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [{
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 0
        }
    }],
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    }
});

const addItems = async () => {
    await Item.deleteMany({});
    await Item.insertMany(mockItems)
        .then(() => console.log("Items added"))
        .catch((err) => console.log(err));
};


// console.log(mockItems);


const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Bank", accountSchema);
const Item = mongoose.model("Item", itemSchema);
const Cart = mongoose.model("Cart", cartSchema);

addItems();

module.exports = ({
    User, Account, Item, Cart
})