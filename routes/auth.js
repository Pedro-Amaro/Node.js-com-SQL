const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.send('Olá Amaro')
});

module.exports = router;