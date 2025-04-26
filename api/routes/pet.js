import express from "express";
import {getPets, getPetID, postPet, deletePets, putPets} from "../controllers/pet.js"; //Importar as funções dentro da controller pet
import { validatePet } from "../middlewares/validarPet.js";
const router = express.Router()

//Depois de definir o caminho, só chamar o nome da função que você irá usar. EX: getPets irá puxar todo mundo que tiver na collection pet, mas também pode ser deletePet, e assim por diante
router.get("/", getPets)  //listagem total
// router.get("/nome") //listagem por nome

router.get("/:id",getPetID) // listagem por ID

router.post("/", validatePet ,postPet) // criação

router.put("/:id",validatePet, putPets) //atualização

router.delete("/:id",deletePets) // exclusão

export default router