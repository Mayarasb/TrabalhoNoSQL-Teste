import express from "express";
import { postClient } from "../controllers/client";
import { deleteClient } from "../controllers/client";


const router = express.Router()


router.post("/",postClient) // criação


//router.put("/:id", putClient) //atualização

router.delete("/:id", deleteClient) // exclusão