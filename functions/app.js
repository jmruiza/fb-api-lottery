const express = require("express");
const admin = require("firebase-admin");

const app = express();

admin.initializeApp({
    credential: admin.credential.cert("./permissions.json")
});

const db = admin.firestore();

app.get('/hello-world', (req, res) => {
    return res.status(200).json({'message':'Hello World!'});
});

module.exports = app; 