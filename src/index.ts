import express, {Response, Request, NextFunction} from 'express';
import axios from 'axios';
import cors from 'cors';
import playerRoute from "./routes/players";

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/player', playerRoute);

app.get('/', (req: Request, res: Response)=>{
  res.send("Hello NLTC")
})

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})
