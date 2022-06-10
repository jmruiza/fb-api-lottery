const functions = require("firebase-functions");
const app = require("./app");

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

exports.app = functions.https.onRequest(app);
