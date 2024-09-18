import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { storage } from "../middlewares/multerConfig";

const upload = multer({storage});

const players = [
  {
    id: 1,
    name: 'James'
  },
  {
    id: 2,
    name: 'Jude'
  },
  {
    id: 3,
    name: 'Jesus'
  }
]

export const getPlayers = async (req: Request, res: Response)=>{
  res.status(200).json(players);
}


export const getOnePlayer = (req: Request, res: Response)=>{
  const playerData = 'single player'
}

export function deletePlayer(req: Request, res: Response){
  const id = req.params.id;
}

export const createPlayer = async (req: Request, res: Response)=>{
  const { name, age, sex, contact_number, email, password } = req.body;

      if (!req.file) {
        return res.status(400).json({ message: 'Profile picture is required' });
      }


  const newPlayer = {
    name,
    age,
    sex,
    contact_number,
    email,
    password,
    profile_pic: req.file.filename
  };
  try{
    res.status(200).json(newPlayer);
  } catch(err: Error | any){
    console.log(err);
    
  }
};
