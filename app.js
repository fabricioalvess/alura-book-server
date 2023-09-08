import express from "express"
import rotas from "./rotas/livro.js"
const app = express();
app.use(express.json())
const port = process.env.PORT || 8000;
app.use("/livros", rotas)
app.listen(port, ()=>{
    console.log("Servidor na porta http://localhost:"+port)
})