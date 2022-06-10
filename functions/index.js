import functions from "firebase-functions";
import app from "../app";

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

exports.app = functions.https.onRequest(app);
