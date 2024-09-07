const mongoose= require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    blockNo: {
        type:Number,
        required:true
    }
})
const Item = mongoose.model("Item",itemSchema);
module.exports = Item;