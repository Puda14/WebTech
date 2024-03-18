const express = require("express");
const blogRouter = require("./routes/BlogRoutes");
const cors = require('cors');
require("dotenv").config();

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");

//configure mongoose
const uri = process.env.DB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("MongoDB connection successful..."); })
    .catch((err) => { console.log("MongoDB connection failed", err.message); });

app.use("/api/blogs", blogRouter);

app.listen(port, () => {
    console.log("Server is running at " + port);
})
module.exports = app;