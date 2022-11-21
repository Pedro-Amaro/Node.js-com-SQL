const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/ProductController');

productCTRL = new ProductController();

router.get("/", async (req, res) => {
    const result = productCTRL.getProducts(req.query);
    res.send(result);
});

router.post("/:id", async (req, res) => {
    console.log(req)
    const result = productCTRL.getProduct(req.params.id, req.query)
    res.send({result})
});

//Cria um produto
router.post("/", async (req, res) => {
    res.send("Olá product")
});

//Edita um produto
router.put("/:id", async (req, res) => {
    res.send("Olá product")
});

router.patch("/:id", async (req, res) => {
    res.send("Olá product")
});

//Deleta um produto
router.delete("/:id", async (req, res) => {
    res.send("Olá product")
});

module.exports = router;