import express,{Request, Response,NextFunction, Router} from "express";
import { getAllAdmin } from "../controllers/adminController";


const router = Router();



router.get('/allAdmins', getAllAdmin);


export default router;