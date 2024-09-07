const express = require("express");
const { authMiddleware } = require("../middleware");
const Item = require("../Models/item.model");
const Cart = require("../Models/cart.model");
const router = express.Router();

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    try {
        const items = await Item.find({
            $or: [
                {
                    name: {
                        $regex: filter,
                        $options: "i"
                    }
                }
                
            ]
        });
        console.log(items);

        res.json(items);
    } catch (error) {
        console.error("Error fetching items:", error);
       
        res.status(500).json({ error: "Internal server error" });
    }
});


router.get("/cart", authMiddleware, async (req, res) => {
    try {
        console.log(req.userId);
        const cart = await Cart.findOne({ userId: req.userId });

        if (!cart) {
            return res.json({
                message: "Cart is empty or does not exist"
            });
        }

        // Use Promise.all to handle async operations in map
        const items = await Promise.all(cart.items.map(async (i) => {
            const item = await Item.findById(i.itemId);
            if (item ) {
                return {
                    name: item.name,
                    price: item.price,
                    blockNo: item.blockNo,
                    quantity:i.quantity
                };
            } else {
                return null;
            }
        }));

        // Filter out any null values if an item was not found
        const filteredItems = items.filter(item => item !== null);

        res.json({
            items: filteredItems
        });
    } catch (error) {
        console.error("Error:", error); 
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/addToCart/:_id", authMiddleware, async (req, res) => {
    const itemId = req.params._id;

    try {
        const item = await Item.findById(itemId);

        if (!item) {
            return res.status(404).json({ error: "Item not found" });
        }

        const cart = await Cart.findOne({ userId: req.userId });

        if (!cart) {
            const newCart = new Cart({
                userId: req.userId,
                items: [{ itemId: itemId, quantity: 1 }]
            });
            
            
            await newCart.save();
        } else {
            const existingItem = cart.items.find(i => i.itemId.toString() === itemId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.items.push({ itemId: itemId, quantity: 1 });
            }
           
            
            await cart.save();
        }
        res.json({ message: "Item added to cart successfully", cart });
    } catch (error) {
        console.error("Error adding item to cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.post("/removeFromCart/:id", authMiddleware, async (req, res) => {
    const itemId = req.params.id;
    
    try {
        const item = await Item.findById(itemId);   
        if (!item) {
            return res.status(404).json({ error: "Item not found" });
        }

        const cart = await Cart.findOne({ userId: req.userId });

        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }

        const existingItem = cart.items.find(i => i.itemId.toString() === itemId);

        if (!existingItem) {
            return res.status(404).json({ error: "Item not in cart" });
        }
        existingItem.quantity -= 1;

        if (existingItem.quantity <= 0) {
            cart.itemList = cart.itemList.filter(i => i.itemId.toString() !== itemId);
        }
        await cart.save();
        res.json({ message: "Item removed from cart successfully" });
    } catch (error) {
        console.error("Error removing item from cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;