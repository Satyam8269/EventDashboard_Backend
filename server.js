const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const eventRouter = require("./routes/event.router");

const connectDB = require("./config/dbConfig");

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
    res.send("Hello Geeks!")
});

app.use("/api/events", eventRouter);


mongoose.connection.once("open", () => {
    console.log("Connection is open!");
    app.listen(PORT, () => {
        console.log("Server is up and running!");
    });
})
