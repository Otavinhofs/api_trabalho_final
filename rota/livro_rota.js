const express = require("express")
const livroController = require("../controller/livro_controller")

const router = express.Router()

//api/livros
router.post('/', livroController.inserir)
router.get('/', livroController.listar)
router.get('/:id', livroController.buscarPorId)
router.get('/:autor', livroController.buscarPorAutor)
router.put('/:id', livroController.atualizar)
router.delete('/:id', livroController.deletar)

module.exports = router