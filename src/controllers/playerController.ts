
import { Request, Response, NextFunction } from "express";



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

export const createPlayer = (req: Request, res: Response)=>{
  const payload = req.body;
}