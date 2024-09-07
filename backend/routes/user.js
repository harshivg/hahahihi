const express = require("express");
require('dotenv').config();
const bcrypt= require('bcryptjs');
const User  = require("../Models/user.model");
const z = require("zod");
const jwt = require("jsonwebtoken");
const  { authMiddleware } = require("../middleware");
const Cart = require("../Models/cart.model");
const router = express.Router();

const signupSchema = z.object({
    username: z.string().min(1, 'Username is required'), 
    password: z.string().min(6, 'Password must be at least 6 characters long'), 
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().optional()
});
const signinSchema = z.object({
    username: z.string().min(1, 'Username is required'), 
    password: z.string().min(1, 'Password is required') 
});

const updateBodySchema = z.object({
    password: z.string().min(6, 'Password must be at least 6 characters long').optional(), 
    firstName: z.string().optional(),
    lastName: z.string().optional() 
});

router.post("/signup", async (req, res) => {
    const body = req.body;
    const { success } = signupSchema.safeParse(req.body);
    if (!success) {
        return res.json({
            check: 0,
        // Contains validation errors
          });
    }

    const existingUser = await User.findOne({
        username: body.username
    })
    
    if(existingUser){
        return  res.json({
            check:-1
        })
    }
    const user = await User.create(body);
    const userId = user._id;

    //also create an empty cart for the user

    await Cart.create({
        userId,
        items: [],
        totalPrice: 0
    })
    
    res.json({
        message: "User created successfully",
        check:1
    })
})

router.post("/signin", async (req, res) => {
    const body = req.body;
    const { success } = signinSchema.safeParse(req.body);

    if (!success) {
        return res.json({
            message: "Invalid inputs",
            check:0

        })
    }
    const user = await User.findOne({
        username: body.username
    })

    if (!user || !(await bcrypt.compare(user.password,body.password))) {
        return res.json({
            message: "Invalid credentials",
            check:0
        })
    }

    const token = jwt.sign({
        userId : user._id
    }, process.env.JWT_SECRET)

    await Cart.findOneAndUpdate(
        { userId: user._id }, // Find the cart by userId
        { $set: { items: [] } } // Set items array to empty
    );
    
    res.json({
        message: "User signed in successfully",
        token: token,
        check:1
    })
})

router.put("/", authMiddleware, async (req, res) => {
    const {success} = updateBodySchema.safeParse(req.body);

    if(!success){
        return res.json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({
        _id: req.userId
    }, req.body)

    return res.json({
        message: "User updated successfully"
    })
})

router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [
            {
                firstName: {
                    $regex: filter
                }
            },
            {
                lastName: {
                    $regex: filter
                }
            }
        ]
    });

    res.json({
        user: users.map(user => ({
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })

})



module.exports = router
