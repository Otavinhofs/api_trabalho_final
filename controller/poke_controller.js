const pokeNegocio = require("../negocio/poke_negocio")

async function inserir(req, res) {    
    const pokemon = req.body
    try { 
        const pokemonInserido = await pokeNegocio.inserir(pokemon)

        res.status(201).json(pokemonInserido);
    } catch (err) {
        if (err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro não identificado"})
        }
    }
}

async function listar(req, res) {    
    try {
        const listaPokemons = await pokeNegocio.listar()
        res.status(200).json(listaPokemons)
    } catch(err) {
        res.status(500).json({erro: err})
    }
}

async function buscaId(req, res) {    
    const id = req.params.id;
    try{ 
        const pokemon = await pokeNegocio.buscaId(id)
        res.json(pokemon)
    } catch(err) {
        if (err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro nao identificado"})
        }
    }
}

async function atualizar(req, res) {    
    const id = req.params.id
    const pokemon = req.body

    try{ 
        const pokemonAtualizado = await pokeNegocio.atualizar(id, pokemon)
        res.json(pokemonAtualizado)
    } catch (err) {
        if (err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro nao identificado"})
        }
    }
}

async function deletar(req, res) {    
    const id = req.params.id
    try{ 
        const pokemon = await pokeNegocio.deletar(id)
        res.json(pokemon)
    } catch(err) {
        if(err.status) {
            res.status(err.status).json(err)
        } else {
            res.status(500).json({message: "Erro nao identificado"})
        }
    }
}

module.exports = {
    listar,
    buscaId,
    inserir,
    atualizar,
    deletar
}