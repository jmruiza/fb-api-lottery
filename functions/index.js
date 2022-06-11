const functions = require("firebase-functions");
const app = require("./app");

const server = app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

module.exports = {
    app: functions.https.onRequest(app),
    server,
};
