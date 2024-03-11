import express from "express";
import nodemailer from 'nodemailer'


const userRouter = new express.Router()

userRouter.post("/register" ,(req, res)=>{
    const {email} = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service :"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASS
            }
        });

        const mailOptions = {
            from : process.env.EMAIL,
            to : email,
            subject : "Sending Email With React and Nodejs",
            html :'<h1>Congratulation You SucessFully Send Email</h1>'
        }

        transporter.sendMail(mailOptions ,(error , info)=>{
            if(error){
                console.log("Error" , error);
            }else{
                console.log("Email sent" + info.response);
                res.status(201).json({status:201,info})
            }
        })
    } catch (error) {
        res.status(201).json({status:401 , error})
    }
})


export default userRouter