import express,{Request, Response,NextFunction, Router} from "express";
import { getAllAdmin, getAdmin } from "../controllers/adminController";

const router = Router();

router.get('/allAdmins', getAllAdmin);
router.get('/:id', getAdmin);

export default router;