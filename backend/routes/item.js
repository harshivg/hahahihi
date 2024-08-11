const express = require("express");
const { Item, Cart } = require("../db");
const { authMiddleware } = require("../middleware");
const router = express.Router();

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const items = await Item.find({
        $or: [
            {
                name: {
                    $regex: filter
                }
            },
            {
                aisle: {
                    $regex: filter
                }
            }
        ]
    });

    res.json({
        items: items.map(item => ({
            name: item.name,
            aisle: item.aisle,
            price: item.price,
            company: item.company,
            id: item.id
        }))
    })
})

router.get("/cart", authMiddleware, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.userId });

        if (!cart) {
            return res.json({
                message: "Cart is empty or does not exist"
            });
        }

        // Use Promise.all to handle async operations in map
        const items = await Promise.all(cart.items.map(async (i) => {
            const item = await Item.findById(i.itemId);
            if (item) {
                return {
                    name: item.name,
                    aisle: item.aisle,
                    price: item.price,
                    company: item.company,
                    quantity: i.quantity
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


router.post("/addToCart/:id", authMiddleware, async (req, res) => {
    const itemId = req.params.id;
    
    console.log(itemId);

    try {
        const item = await Item.findById(itemId);
        
        console.log(item.name);

        if (!item || item.quantity === 0) {
            return res.status(404).json({ error: "Item not found" });
        }
        
        const cart = await Cart.findOne({ userId: req.userId });
        
        console.log(cart);

        if (!cart) {
            const newCart = new Cart({
                userId: req.userId,
                items: [{ itemId: itemId, quantity: 1 }]
            });
            item.quantity -= 1;
            
            await item.save();
            await newCart.save();
        } else {
            // Check if the item already exists in the cart
            const existingItem = cart.items.find(i => i.itemId.toString() === itemId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.items.push({ itemId: itemId, quantity: 1 });
            }
            item.quantity -= 1;
            
            await item.save();
            await cart.save();
        }
        
        res.json({ message: "Item added to cart successfully" , cart});
    } catch (error) {
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
        item.quantity += 1;
        
        await item.save();
        await cart.save();

        res.json({ message: "Item removed from cart successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;