import express,{Request, Response,NextFunction} from "express";
import {getPlayers, getOnePlayer, createPlayer, deletePlayer} from '../controllers/playerController';



const router = express.Router();

// Player routes 
router.get('/players', getPlayers);
router.get('/players/:id', getOnePlayer);
router.post('/players', createPlayer);
router.delete('/players/:id', deletePlayer);

router.get('/sample', async(req: Request, res: Response)=>{
  try{
    await res.json({message: "sample Data"})
  } catch(err: Error|any){
    res.status(500).json({message: err.message})
  }
  
})

export default router;