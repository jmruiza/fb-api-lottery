const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");

const app = express();

admin.initializeApp({
    credential: admin.credential.cert('./permissions.json')
});

const db = admin.firestore();

app.get('/hello-world', (req, res) => {
    return res.status(200).json({message: 'Hello World!'});
});

app.post('/api/user', async (req, res) => {
    const {name, email} = req.body;
    await db.collection('users').doc().create({ name, email })
    return res.status(200).json({message: 'User created!'});
});


exports.app = functions.https.onRequest(app);