const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const Hello = require("./api/hello");
require('dotenv').config();
const mongoose = require("mongoose");


const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

app.use("/api/v1", mainRouter);

app.get("/", Hello);
app.listen(port,  () => {
    console.log("Server is running on port " + port);
});