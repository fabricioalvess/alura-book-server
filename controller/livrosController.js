
import servicosLivros from "../servicos/livros.js"
class livrosControler {
    static listarLivros = (req,res)=>{
        try{
            const livros = servicosLivros.getTodosLivros()
            res.status(200).send(livros)
        }catch(err){
            res.status(500).send(err.message)
        }
    }
    static listarPorId = (req,res) =>{
        try{
            const id = req.params.id
            if(id && Number(id)){
                const livros = servicosLivros.getPorId(id)
                res.status(200).send(livros)
            }else{
                res.status(422).send("id invalido")
            }
           
        }catch(err){
            res.status(500).send(err.message)
        }
    }
    static atualizarLivros = (req,res)=>{
        try{
            const id = req.params.id
            if(id && Number(id)){
                const body = req.body
            servicosLivros.livroModificado(body,id)
            res.status(200).send("atualizado")
            }else{
                res.status(422).send("item modificado invalido")
            }
            
        }catch(err){
            res.status(500).send(err.message)
        }
    }
    static criarLivros = (req,res)=>{
        try{
            if(req.body.nome){
                const novoLivro = req.body
                servicosLivros.insereLivro(novoLivro)
                res.status(201).send("Livro inserido com sucesso")
            }else{
                res.status(422).send("O campo nome e obrigatorio")
            }
        }catch(err){
            res.status(500).send(err.message)
        }
    }
    static deletarLivros = (req,res)=>{
        try{
            const id = req.params.id
            if(id && Number(id)){
                servicosLivros.deleteLivro(id)
                res.status(200).send("item deletado")
            }else{
                res.stats(422).send("id invalido")
            }
            
        }catch(err){
            res.status(500).send(err.message)
        }
    }
}
export default livrosControler