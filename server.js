const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const songRouter = require("./routes/song.router");


const app = express();
require("dotenv").config();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));




app.use("/song", songRouter);


app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
