import { Request, Response, NextFunction } from "express";
import {isUnique, checkUserAcc} from "../services/adminServices";
import bcrypt from 'bcrypt';


export const login = async (req: Request, res:Response): Promise<void|Response> =>{

  const {email, password} = req.body;

  const users = await checkUserAcc(email as string);
  if(users == null || users == undefined){
     res.status(400).json({message: 'cannot find user'});
  };
  try {
    const match = await bcrypt.compare(password, users!.password);
    if(match){      
      res.status(200).send(users);
    }  else {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    res.send(users).status(200);
  } catch (error) {
    res.status(500).send(error);
  }

}