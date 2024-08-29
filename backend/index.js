const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const Hello = require("./api/hello");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", mainRouter);

app.get("/", Hello);
app.listen(3000,  () => {
    console.log("Server is running on port 3000");
});