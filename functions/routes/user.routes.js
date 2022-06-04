const admin = require("firebase-admin");
const {Router} = require('express')
const router = Router();

admin.initializeApp({
    credential: admin.credential.cert('./permissions.json')
});

const db = admin.firestore();

// Create a new user
router.post('/api/user', async (req, res) => {
    try {
        const {name, email} = req.body;
        await db.collection('users').doc().create({ name, email })
        return res.status(200).json({message: 'User created!'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

// Get all users
router.get('/api/users', async (req, res) => {
    try {
        const users = await db.collection('users').get();
        return res.status(200).json(users.docs.map(doc => doc.data()));
    } catch (error) {
        return res.status(500).json({message: error.message});
    }   
});

// Get a user by id
router.get('/api/users/:user_id', async (req, res) => {
    try {   
        const {user_id} = req.params;
        const user = await db.collection('users').doc(user_id).get();
        return res.status(200).json(user.data());
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

// Update user data by id
router.put('/api/user/:user_id', async (req, res) => {
    try {
        const {user_id} = req.params;
        await db.collection('users').doc(user_id).update(req.body);
        return res.status(200).json({message: "User updated!"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

// Delete user by id
router.delete('/api/user/:user_id', async (req, res) => {
    try {
        const {user_id} = req.params;
        await db.collection('users').doc(user_id).delete();
        return res.status(200).json({message: "User deleted!"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

module.exports = router;