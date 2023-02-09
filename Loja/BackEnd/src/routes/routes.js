const express = require('express');

const router = express.Router();

const Setor = require('../controllers/setor');
const Produtos = require('../controllers/produtos')
const Vendedor = require('../controllers/vendedor')
const Vendas = require('../controllers/vendas')
const Detalhes = require('../controllers/detalhes')

router.post("/setor/create", Setor.create);
router.get("/setor/read", Setor.read);
router.get("/setor/read/:id", Setor.readId);

router.post("/produtos/create", Produtos.create);
router.get("/produtos/read", Produtos.read);

router.post("/vendedores/create", Vendedor.create);
router.get("/vendedores/read", Vendedor.read);
router.get("/vendedores/readId/:id", Vendedor.readId);

router.post("/vendas/create", Vendas.create);
router.get("/vendas/read", Vendas.read);
router.get("/vendas/readId/:id", Vendas.readId);

router.post("/detalhes/create", Detalhes.create);
router.get("/detalhes/read", Detalhes.read);
router.get("/detalhes/readId/:id", Detalhes.readId);

module.exports = router;