require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose= require('mongoose');
const mainRouter = require("./routes/index");

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
// app.use('/', (req, res) => {
//   res.status(200).json({ message: "Hello from Vercel!" });
// })
app.use("/api/", mainRouter);

app.listen(port,  () => {
    console.log("Server is running on port " + port);
});
