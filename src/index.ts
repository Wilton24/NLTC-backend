import express, {Response, Request, NextFunction} from 'express';
import cors from 'cors';
import playerRoute from "./routes/players";
import adminRoute from './routes/admins'
import { login } from './controllers/login';
import dotenv from "dotenv";

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.post('/login', login)



app.use('/player', playerRoute);
app.use('/admin', adminRoute);

app.get('/', (req: Request, res: Response)=>{
  res.send("Hello NLTC so much :D")
})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})
