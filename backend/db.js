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
    price: Number
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
            min: 1
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
        price: 0.5
    },
    {
        id: "2",
        quantity: 20,
        company: "Walmart",
        name: "Banana",
        aisle: "Produce",
        price: 0.3
    },
    {
        id: "3",
        quantity: 30,
        company: "Walmart",
        name: "Orange",
        aisle: "Produce",
        price: 0.4
    },
    {
        id: "4",
        quantity: 40,
        company: "Walmart",
        name: "Peach",
        aisle: "Produce",
        price: 0.6
    },
    {
        id: "5",
        quantity: 50,
        company: "Walmart",
        name: "Pear",
        aisle: "Produce",
        price: 0.7
    }
]

const addItems = async () => {
    try {
        for (const item of mockItems) {
            const existingItem = await Item.findOne({ id: item.id });
            if (existingItem) {
                existingItem.quantity += item.quantity;
                await existingItem.save();
                console.log(`Updated quantity of item with ID ${item.id}. New quantity: ${existingItem.quantity}`);
            } else {
                const newItem = new Item(item);
                await newItem.save();
                console.log(`Added new item with ID ${item.id}`);
            }
        }
    } catch (error) {
        console.error("Error adding or updating items:", error);
    }
};



const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Bank", accountSchema);
const Item = mongoose.model("Item", itemSchema);
const Cart = mongoose.model("Cart", cartSchema);

addItems();

module.exports = ({
    User, Account, Item, Cart
})