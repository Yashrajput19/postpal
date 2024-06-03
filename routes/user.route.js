import { Router } from "express";
import { User } from "../models/user.model.js";

const userRouter = Router();

userRouter.get('/signin',(req,res) => {
    return res.render("signin");
})

userRouter.get('/signup',(req,res) => {
    return res.render("signup");
})

userRouter.post('/signin' , async (req,res) => {

    const {email , password} = req.body;
    const user = await User.matchPassword(email,password);

    console.log('User' , user);
    return res.redirect('/');
})

userRouter.post('/signup',async (req,res) => {
    
    const {name , email , password} = req.body;
    await User.create({
        name,
        email,
        password,
    });

    return res.redirect("/");
});

export default userRouter;