import fs from "fs"
class servicosLivros {
    
    static getTodosLivros = ()=> {
        return JSON.parse(  fs.readFileSync("db.json"))
    }
    static getPorId = (id)=>{
        const livros = JSON.parse(fs.readFileSync("db.json"))
        const livroFiltrado = livros.filter(livro => livro.id == id)[0]
        return livroFiltrado
    }
    static insereLivro = (livroNovo)=>{
        const livros = JSON.parse(fs.readFileSync("db.json"))
        const inserirNovoLivroALista = [...livros, livroNovo]
        fs.writeFileSync("db.json", JSON.stringify(inserirNovoLivroALista))
    }
   static livroModificado = (modificacoes, id)=>{
    let livros = JSON.parse(fs.readFileSync("db.json"))
    const indiceModificado = livros.findIndex(livro => livro.id == id)
    const conteudoMudado = {...livros[indiceModificado], ...modificacoes}
    livros[indiceModificado] = conteudoMudado
    fs.writeFileSync("db.json", JSON.stringify(livros))
   } 
   static deleteLivro = (id)=>{
        let livros = JSON.parse(fs.readFileSync("db.json"))
        const indiceExcluir = livros.filter(livro => livro.id !== id)
      
        fs.writeFileSync("db.json",JSON.stringify(indiceExcluir))
   }
}
export default servicosLivros