const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");
const categoryCTRL = new CategoryController();

router.get("/", async (req, res) => {
    const result = categoryCTRL.getCategories();
    res.send(result)
});

router.get("/:id", async (req, res) => {
    const result = categoryCTRL.getCategory(req.params.id);
    res.send(result)
});

//Cria um Category
router.post("/:", async (req, res) => {
    res.send('Olá category')
});

//Edita um Category
router.put("/:id", async (req, res) => {
    res.send('Olá category')
});

router.patch("/:", async (req, res) => {
    res.send('Olá category')
});

//Deleta um Category
router.delete("/:id", async (req, res) => {
    res.send('Olá category')
});

module.exports = router;