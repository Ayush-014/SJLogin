const express = require('express');
const router = express.Router();



router.post("/signup", (req, res) => {
    res.send("User signed up");
});
module.exports = router;