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

const app = express();

dotenv.config();

const refreshTokenSecret = process.env.REFRESH_TOKEN as string;

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.post('/login', login);
app.post('/register', registerUser);


// Server Testing routes (No Authentication);
// app.get('/sample', (req: Request, res: Response)=>{
//   res.send("Sample working :D")
// });

// app.post('/testing', async (req: Request, res: Response)=>{
//   if(await bcrypt.compare(req.body.password, '$2b$10$em/rIE7A/wiRvyPhL39OMeJSyaX76ufgrx5HvbvLToWBan1tQH0ZC')){
//     res.status(200).send('success');
//   } else {
//     res.status(400).send('fail');
//   };
// })


app.use('/player', playerRoute);
app.use('/admin', authenticateToken, adminRoute);

app.get('/', (req: Request, res: Response)=>{
  res.send("Hello NLTC so much :D")
});


app.post('/refresh-token', (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).send('No refresh token provided');
  }

  // Verify the refresh token
  jwt.verify(refreshToken, refreshTokenSecret, (err : any, user: any) => {
    if (err) {
      return res.status(403).send('Invalid refresh token');
    }

    // Generate a new access token
    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  });
});

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
});

