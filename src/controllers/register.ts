import { Request, Response, NextFunction } from "express";
import {isUnique, checkUserAcc} from "../services/adminServices";
import bcrypt from 'bcrypt';
import {createAdmin} from "../controllers/adminController"


export interface IUser {
  email: string;
  password: string;
  name?: string | undefined;
}

export const registerUser = async (req: Request, res:Response) =>{
  const {email, password, name} = req.body;
    
  try {
    const checkExistingEmail = await isUnique(email); // returns boolean depending on the email
    if(checkExistingEmail){
      res.status(409).json({
        "status": 409,
        "message": "Email address already exists."
      });
      return;
    };
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const user : IUser = {
      email: email,
      password: hashedPassword,
      name: name,    
    };

    const createUser = await createAdmin(user);

    res.status(200).json(createUser);

  } catch (error) {
    res.status(500).send(error);
  }

};