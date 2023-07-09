const pokemonPersistencia = require("../persistencia/poke_persistencia")

async function inserir(poke) {
    if (poke && poke.id && poke.pokemon && poke.type ) {
        try {
            const pokemonInserido = await pokemonPersistencia.inserir(poke);
            return pokemonInserido
        } catch(err) { 
            throw err 
        }
    } else {
        const erro = new Error()
        erro.message = "Falta parametros no pokemon"
        erro.status = 400
        throw erro
    }
}

async function listar() {
    try { 
        const listaPokemons = await pokemonPersistencia.listar()
        return listaPokemons
    } catch(err) { 
        throw err
    }
}

async function buscaId(id) {
    try { 
        const pokemon = await pokemonPersistencia.buscaId(id)
        if(!pokemon) {
            let erro = new Error()
            erro.message = "pokemon não encontrado"
            erro.status = 404
            throw erro
        }
        return pokemon
    } catch(err) {
        throw err
    }
}

async function atualizar(id, novoPokemon) {
    if(novoPokemon && novoPokemon.pokemon && novoPokemon.type) {
        try {
            const pokemonAtualizado = await pokemonPersistencia.atualizar(id, novoPokemon)
            if(!pokemonAtualizado) {
                let erro = new Error()
                erro.message = "pokemon não encontrado"
                erro.status = 404
                throw erro
            }
            return pokemonAtualizado
        } catch(err) { 
            throw err
        }
    } else {
        const erro = new Error()
        erro.message = "Falta parametros para atualizar o pokemon"
        erro.status = 400
        throw erro
    }
}

async function deletar(id) {
    try { 
        const pokemon = await pokemonPersistencia.deletar(id)
        if(!pokemon) {
            let erro = new Error()
            erro.message = "pokemon nao encontrado"
            erro.status = 404
            throw erro
        }
        return pokemon
    } catch(err) { 
        throw err 
    }
}

module.exports = { 
    listar, 
    inserir, 
    buscaId, 
    deletar, 
    atualizar
}