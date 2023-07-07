const livroPersistencia = require("../persistencia/livro_persistencia")

async function inserir(livro) {
    if (livro && livro.id && livro.nome && livro.autor && livro.editora && livro.ano) {
        try {
            const livroInserido = await livroPersistencia.inserir(livro);
            return livroInserido
        } catch(err) { 
            throw err 
        }
    } else {
        const erro = new Error()
        erro.message = "Falta parametros no livro"
        erro.status = 400
        throw erro
    }
}

async function listar() {
    try { 
        const listaLivros = await livroPersistencia.listar()
        return listaLivros
    } catch(err) { 
        throw err
    }
}

async function buscarPorId(id) {
    try { 
        const livro = await livroPersistencia.buscarPorId(id)
        if(!livro) {
            let erro = new Error()
            erro.message = "Livro não encontrado"
            erro.status = 404
            throw erro
        }
        return livro
    } catch(err) {
        throw err
    }
}

async function atualizar(id, novoLivro) {
    if(novoLivro && novoLivro.id && novoLivro.nome && novoLivro.autor && novoLivro.editora && novoLivro.ano) {
        try {
            const livroAtualizado = await livroPersistencia.atualizar(id, novoLivro)
            if(!livroAtualizado) {
                let erro = new Error()
                erro.message = "Livro não encontrado"
                erro.status = 404
                throw erro
            }
            return livroAtualizado
        } catch(err) { 
            throw err
        }
    } else {
        const erro = new Error()
        erro.message = "Falta parametros no livro"
        erro.status = 400
        throw erro
    }
}

async function deletar(id) {
    try { 
        const livro = await livroPersistencia.deletar(id)
        if(!livro) {
            let erro = new Error()
            erro.message = "Livro nao encontrado"
            erro.status = 404
            throw erro
        }
        return livro
    } catch(err) { 
        throw err 
    }
}

module.exports = { 
    listar, 
    inserir, 
    buscarPorId, 
    deletar, 
    atualizar
}