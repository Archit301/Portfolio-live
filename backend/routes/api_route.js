import express from "express"
import { createApi, deleteApi, getAllApis, getApiById, updateApi } from "../controllers/api_controller.js";

const router=express.Router()

router.get('/', getAllApis);


router.get('/:id', getApiById);


router.post('/', createApi);

router.put('/:id', updateApi);


router.delete('/:id', deleteApi);

export default router;