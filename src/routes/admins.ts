import express,{Request, Response,NextFunction, Router} from "express";
import { getAllAdmin, createAdmin } from "../controllers/adminController";


const router = Router();



router.get('/allAdmins', getAllAdmin);
router.post('/allAdmins', createAdmin);





export default router;