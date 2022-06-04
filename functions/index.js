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
    try {
        const {name, email} = req.body;
        await db.collection('users').doc().create({ name, email })
        return res.status(200).json({message: 'User created!'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

app.get('/api/users/:user_id', async (req, res) => {
    try {   
        const {user_id} = req.params;
        const user = await db.collection('users').doc(user_id).get();
        return res.status(200).json(user.data());
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});


exports.app = functions.https.onRequest(app);