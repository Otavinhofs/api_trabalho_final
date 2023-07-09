const express = require("express")
const pokemonController = require("../controller/poke_controller")

const router = express.Router()

//pokemons
router.post('/', pokemonController.inserir)
router.get('/', pokemonController.listar)
router.get('/:id', pokemonController.buscaId)
router.put('/:id', pokemonController.atualizar)
router.delete('/:id', pokemonController.deletar)

module.exports = router