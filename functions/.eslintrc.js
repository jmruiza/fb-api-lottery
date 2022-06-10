module.exports = {
    "root": true,
    "env": {
        "es6": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "google",
    ],
    "rules": {
        "quotes": ["error", "double"],
        "linebreak-style": 0,
        "indent": ["error", 4],
    },
    "parser": "@babel/eslint-parser",
};
