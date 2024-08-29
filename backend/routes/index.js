const express = require("express");
const userRouter = require("./user");
const accountRouter = require("./account");
const itemRouter = require("./item");


const router = express.Router();
router.use("/user", userRouter);
router.use("/account", accountRouter);
router.use("/item", itemRouter);

module.exports = router;
