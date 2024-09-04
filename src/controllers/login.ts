import { Request, Response, NextFunction } from "express";
import {isUnique, checkUserAcc} from "../services/adminServices";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateAccessToken } from "../middlewares/authToken";


export const login = async (req: Request, res: Response): Promise<void | Response> => {
  const { email, password } = req.body;
  const user = await checkUserAcc(email as string);

  if (!user) {
    return res.status(400).json({ message: 'Please input valid email' });
  };

  try {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const payload = { id: user.id, email: user.email, name: user.name };

      const accessToken = generateAccessToken(payload);
      const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN as string);

      // Set the refresh token as an HttpOnly cookie
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
      });

      res.header('authorization', `Bearer ${accessToken}`);

      return res.status(200).json({ accessToken, refreshToken, user: user.email });
    } else {
      return res.status(401).json({ message: 'Invalid credentials. Please try again.' });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};
