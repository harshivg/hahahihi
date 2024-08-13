const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:hx220903@cluster0.fkjkl0y.mongodb.net/walmart");


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


//mock data
const mockItems = [
    {
        id: "1",
        quantity: 10,
        company: "Walmart",
        name: "Apple",
        aisle: "Produce",
        price: 5,
        blockNo: 1
    },
    {
        id: "2",
        quantity: 20,
        company: "Walmart",
        name: "Banana",
        aisle: "Produce",
        price: 3,
        blockNo: 2
    },
    {
        id: "3",
        quantity: 30,
        company: "Walmart",
        name: "Orange",
        aisle: "Produce",
        price: 4,
        blockNo: 3
    },
    {
        id: "4",
        quantity: 40,
        company: "Walmart",
        name: "Peach",
        aisle: "Produce",
        price: 6,
        blockNo: 4
    },
    {
        id: "5",
        quantity: 50,
        company: "Walmart",
        name: "Pear",
        aisle: "Produce",
        price: 7,
        blockNo: 5
    }
]

const addItems = async () => {
    await Item.deleteMany({});
    await Item.insertMany(mockItems);

    console.log("Items added");
};



const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Bank", accountSchema);
const Item = mongoose.model("Item", itemSchema);
const Cart = mongoose.model("Cart", cartSchema);

addItems();

module.exports = ({
    User, Account, Item, Cart
})