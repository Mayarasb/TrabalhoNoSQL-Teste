import express from "express";
import {getPets} from "../controllers/pet.js"; //Importar as funções dentro da controller pet
import {postPets} from "../controllers/pet.js";
import { putPets } from "../controllers/pet.js";
import { deletePets } from "../controllers/pet.js";

const router = express.Router()

//Depois de definir o caminho, só chamar o nome da função que você irá usar. EX: getPets irá puxar todo mundo que tiver na collection pet, mas também pode ser deletePet, e assim por diante
router.get("/", getPets)  //listagem total
// router.get("/nome") //listagem por nome

// router.get("/:id") // listagem por ID

router.post("/",postPets) // criação

router.put("/:id", putPets) //atualização

router.delete("/:id", deletePets) // exclusão







export default router