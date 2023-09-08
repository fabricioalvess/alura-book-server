import express from "express"
import livrosController from "../controller/livrosController.js"
const router = express.Router()

router
    .get("/",livrosController.listarLivros)
    .get("/:id",livrosController.listarPorId)
    .post("/",livrosController.criarLivros)
    .put("/:id",livrosController.criarLivros)
    .delete("/:id",livrosController.deletarLivros)

export default router