import express from "express"
import { createUserProfile, deleteUserProfile, getUserProfile, updateUserProfile } from "../controllers/user_controller.js";

const router=express.Router();

router.post('/',createUserProfile)
router.get('/',getUserProfile);


router.put('/', updateUserProfile);


router.delete('/', deleteUserProfile);


export default router;