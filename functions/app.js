import express from "express";
import admin from "firebase-admin";

const app = express();

admin.initializeApp({
    credential: admin.credential.cert("./permissions.json"),
});

// const db = admin.firestore();

app.get("/hello-world", (req, res) => {
    try {
        return res.status(200).json({"message": "Hello World!"});
    } catch (error) {
        return res.status(500);
    }
});

module.exports = app;
