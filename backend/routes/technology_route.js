import express from "express"
import { createTechnology, deleteTechnology, getAllTechnologies, getTechnologyById, updateTechnology } from "../controllers/technology_controller.js";

const router=express.Router()



router.get('/',getAllTechnologies);


router.get('/:id',getTechnologyById);

router.post('/',createTechnology);

router.put('/:id',updateTechnology);

router.delete('/:id',deleteTechnology);


export default router;