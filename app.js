const express = require('express')
const livroRota = require('./rota/livro_rota')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/livros", livroRota)

app.listen (3000, () => { 
    console.log("Servidor iniciado...")
})