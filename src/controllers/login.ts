import { Request, Response, NextFunction } from "express";


export const login = async (req: Request, res:Response): Promise<void> =>{
  const message: string = 'Login';
  res.send({mensahe: message}).status(200);
}