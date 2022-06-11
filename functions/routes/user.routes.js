/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable object-curly-spacing */

const {Router} = require("express");
const router = Router();
const db = require("../utils/db").default;

// Create a new user
router.post("/user", async (req, res) => {
    try {
        const {name, email} = req.body;
        await db.collection("users").doc().create({ name, email });
        return res.status(200).json({
            message: `User created!`,
        });
    } catch (error) {
        console.log("/api/user: ", error);
        return res.status(500).json({ message: error.message });
    }
});

// Get all users
router.get("/users", async (req, res) => {
    try {
        const response = await db.collection("users").get();
        return res.status(200).json(
            response.docs.map((doc) => ({
                "id": doc.id,
                "name": doc.data().name,
                "email": doc.data().email,
            })
        ));
    } catch (error) {
        console.log("/api/users: ", error);
        return res.status(500).json({ message: error.message });
    }
});

// Get a user by id
router.get("/user/:userId", async (req, res) => {
    try {
        const {userId} = req.params;
        const user = await db.collection("users").doc(userId).get();
        return res.status(200).json({
            id: userId,
            name: user.data().name,
            email: user.data().email,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// Update user data by id
router.put("/user/:user_id", async (req, res) => {
    try {
        const {user_id} = req.params;
        await db.collection("users").doc(user_id).update(req.body);
        return res.status(200).json({ message: "User updated!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// Delete user by id
router.delete("/user/:user_id", async (req, res) => {
    try {
        const {user_id} = req.params;
        await db.collection("users").doc(user_id).delete();
        return res.status(200).json({ message: "User deleted!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;
