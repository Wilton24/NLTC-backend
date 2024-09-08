import { getAdmins } from "../services/adminServices";
import jwt from 'jsonwebtoken';

export const authenticateAdmin = async (req: any, res: any, next: any) => {
  const allAdmins = await getAdmins();

  const user = allAdmins.find(user => user.email === req.email);  
  
  const tokenSecret = process.env.ACCESS_TOKEN as string;
  const decoded = req.body.token;
  const jwtPayload = jwt.verify(decoded, tokenSecret);

};