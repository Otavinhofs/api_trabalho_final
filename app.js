const express = require('express')
const pokeRota = require('./rota/poke_rota')
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use("/pokemons", pokeRota)

app.listen (3000, () => { 
    console.log("Servidor iniciado...")
})