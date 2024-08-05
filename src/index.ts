import express, {Response, Request, NextFunction} from 'express';
import cors from 'cors';
import playerRoute from "./routes/players";
import adminRoute from './routes/admins'
import { login } from './controllers/login';
import dotenv from "dotenv";
import {registerUser} from './controllers/register';
import bcrypt from 'bcrypt';

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.post('/login', login)
app.post('/register', registerUser)

// app.post('/testing', async (req: Request, res: Response)=>{
//   if(await bcrypt.compare(req.body.password, '$2b$10$em/rIE7A/wiRvyPhL39OMeJSyaX76ufgrx5HvbvLToWBan1tQH0ZC')){
//     res.status(200).send('success');
//   } else {
//     res.status(400).send('fail');
//   };
// })


app.use('/player', playerRoute);
app.use('/admin', adminRoute);

app.get('/', (req: Request, res: Response)=>{
  res.send("Hello NLTC so much :D")
})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})
