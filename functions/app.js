const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");

const app = express();

// Middlewares
app.use(bodyParser.json());
         
// Routes
app.get("/hello-world", (req, res) => {
    try {
        return res.status(200).json({"message": "Hello World!"});
    } catch (error) {
        return res.status(500);
    }
});

app.use("/api", userRoutes);

module.exports = app;
