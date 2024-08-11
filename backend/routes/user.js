const express = require("express");
const { User, Account } = require("../db");
const z = require("zod");
const jwt = require("jsonwebtoken");

const { authMiddleware } = require("../middleware");
const JWT_SECRET = require("./config");

const router = express.Router();

const signupSchema = z.object({
    username: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string()
})

const signinSchema = z.object({
    username: z.string(),
    password: z.string()
})

const updateBodySchema = z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional()
})

router.post("/signup", async (req, res) => {
    const body = req.body;
    const { success } = signupSchema.safeParse(req.body);

    if (!success) {
        return res.status(403).json({
            message: "heres what was received", body
        })
    }

    const existingUser = await User.findOne({
        username: body.username
    })

    if(existingUser){
        return res.status(411).json({
            message: "user already exists"
        })
    }

    const user = await User.create(body);
    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.floor(Math.random() * 10000)
    })
    
    res.json({
        message: "User created successfully",
    })


})

router.post("/signin", async (req, res) => {
    const body = req.body;
    const { success } = signinSchema.safeParse(req.body);

    if (!success) {
        return res.json({
            message: "Invalid inputs"
        })
    }

    const user = await User.findOne({
        username: body.username,
        password: body.password
    })

    if (!user) {
        return res.json({
            message: "Invalid credentials"
        })
    }

    const token = jwt.sign({
        userId : user._id
    }, JWT_SECRET)
    
    res.json({
        message: "User signed in successfully",
        token: token
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