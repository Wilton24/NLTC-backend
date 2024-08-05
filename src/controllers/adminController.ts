import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { isUnique, getAdmins } from '../services/adminServices';
import Admin from '../models/Admin';
import { IUser } from './register';

export const getAllAdmin = async (req: Request, res:Response): Promise<void>=>{
  try {
    const allAdmins = await getAdmins();
    res.status(200).json(allAdmins);
  } catch (err: Error|any) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

export const createAdmin = async (userData:any): Promise<void>=>{
  // const {email, password} = req.body;

  //   const checkExistingEmail = await isUnique(email);
  //   checkExistingEmail ? res.send(checkExistingEmail).status(200) : res.send(checkExistingEmail).status(400);
  // try{
  //   // const hashedPassword = await bcrypt.hash(password, 10);

  // }catch(err: Error|any){
  //   console.log(err);    
  // } 
  await Admin.create(userData).then(user => {
    console.log('User created:', user.toJSON());
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });;
}

