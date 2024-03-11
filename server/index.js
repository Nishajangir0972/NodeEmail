import express from "express";
import cors from "cors";
import userRouter from "./routes/Router.js";
import { config } from "dotenv";

config()

const app = express()
const PORT = 6002
app.use(express.json())
app.use(cors())
app.use(userRouter)


app.listen(PORT ,()=>{
    console.log(`server has been started on port no ${PORT}`);
})
