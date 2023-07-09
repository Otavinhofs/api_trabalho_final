const {Client} = require("pg")

const conexao = {
    host: 'localhost',
    port: 5432,
    database: 'pokemon',
    user: 'postgres',
    password: '1234'
}

async function inserir(poke) {
    const pokemonConexao = new Client(conexao)
    const sql = "INSERT INTO pokemons(id, pokemon, type) VALUES($1,$2,$3) RETURNING *"
    const values = [poke.id, poke.pokemon, poke.type]
    pokemonConexao.connect()
    try {
        const resultado = await pokemonConexao.query(sql, values)
        pokemonConexao.end()
        return resultado.rows[0]
    } catch(err) {
        throw err
    }
}

async function listar() {
    
    try {
        
        const pokemon = new Client(conexao)
        const sql = "SELECT * FROM pokemons"
       
        pokemon.connect()
        const resultado = await pokemon.query(sql)
        pokemon.end()
        
        return resultado.rows
    } catch(err) {
        throw err
    }
}

async function buscaId(id) {
    const pokemon = new Client(conexao)
    const sql = "SELECT * FROM pokemons WHERE id=$1"
    const values = [id]
    pokemon.connect()
    try {
        const resultado = await pokemon.query(sql, values)
        
        pokemon.end()
        
        return resultado.rows[0]
    }
    catch(err){
        throw err
    }
}

async function atualizar(id, poke) {
    const pokemonConexao = new Client(conexao)
    const sql = "UPDATE pokemons SET pokemon=$1, type=$2 WHERE id=$3  RETURNING *"
    const values = [poke.pokemon, poke.type, id]
    pokemonConexao.connect()
    try {
        const resultado = await pokemonConexao.query(sql,values)
        
        pokemonConexao.end()
        
        return resultado.rows[0]
    } catch(err) {
        throw err
    }
}

async function deletar(id) {
    const pokemon = new Client(conexao)
    const sql = "DELETE FROM pokemons WHERE id=$1 RETURNING *"
    const values = [id]
    pokemon.connect()
    try {
        const resultado = await pokemon.query(sql, values)
        
        pokemon.end()
        
        return resultado.rows[0]
    } catch(err) {
        throw err
    }
}

module.exports = { 
    listar, 
    buscaId, 
    inserir, 
    atualizar, 
    deletar
}