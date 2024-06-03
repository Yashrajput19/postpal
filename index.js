import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import userRouter from './routes/user.route.js';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;

dotenv.config({
    path: './env'
})

mongoose.connect(`${process.env.MONGODB_URI}/PostPal`)
.then(() => console.log('MongoDB Connected !!'))

app.set("view engine","ejs");
app.set("views" , path.resolve("./views"));

app.use(express.urlencoded({extended: false}));

app.get('/' , (req,res) => {
    res.render("home");
})

app.use('/user',userRouter);

app.listen(PORT, () => {
    console.log(`Server started at PORT : ${PORT}`)
})