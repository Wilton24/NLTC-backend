import express, {Response, Request, NextFunction} from 'express';
import cors from 'cors';
import playerRoute from "./routes/players";
import adminRoute from './routes/admins'
import { login } from './controllers/login';
import dotenv from "dotenv";
import {registerUser} from './controllers/register';
import { authenticateToken, generateAccessToken } from './middlewares/authToken';
import jwt from "jsonwebtoken";
import cookieParser from 'cookie-parser';
import multer from "multer";
import path from "path";
import {storage} from "./middlewares/multerConfig";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const refreshTokenSecret = process.env.REFRESH_TOKEN as string;


const upload = multer({storage});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.post('/login', login);
app.post('/register', registerUser);


app.get('/', (req: Request, res: Response)=>{
  res.send("Hello NLTC so much :D")
});

app.post('/profile', upload.single('avatar'), function (req: Request, res: Response, next: NextFunction) {
  res.status(200).json(req.file);
});



app.use(authenticateToken);
app.use('/player', playerRoute);
app.use('/admin', adminRoute);

app.get('/logout', (req: Request, res: Response)=>{
  res.clearCookie('refreshToken');
  res.sendStatus(200);
});

app.post('/refresh-token', (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).send('No refresh token provided');
  };

  // Verify the refresh token
  jwt.verify(refreshToken, refreshTokenSecret, (err : any, user: any) => {
    if (err) {
      return res.status(403).send('Invalid refresh token');
    };

    // Generate a new access token
    const accessToken = generateAccessToken({id: user.id, email: user.email});
    res.json({ accessToken });
  });
});

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
});

