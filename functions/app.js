const express = require("express");
const userRoutes = require("./routes/user.routes");

const app = express();

app.get("/hello-world", (req, res) => {
    try {
        return res.status(200).json({"message": "Hello World!"});
    } catch (error) {
        return res.status(500);
    }
});

app.use("/api/users", userRoutes);

module.exports = app;
