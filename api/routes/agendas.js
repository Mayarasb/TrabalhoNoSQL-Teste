import express from "express"
import { getAgendaById, getAgendas,putEstadia,PostEstadia } from "../controllers/agendas.js";

const router = express.Router();

router.get("/", getAgendas) //listagem geral 

router.get("/:id", getAgendaById) // listagem por ID

//router.post("/") // criação
router.post("/",PostEstadia)

router.put("/:id",putEstadia) //atualização


//router.delete("/:id") // exclusão

export default router;