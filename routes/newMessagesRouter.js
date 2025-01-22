import { Router } from "express";
import messages from "../model/messages.js";

const newMessagesRouter = Router();

newMessagesRouter.get("/", (req, res) =>{
    res.render('form.ejs')
})

newMessagesRouter.post("/", (req, res) =>{
    console.log(req.body);
    const newMessage = {
        ...req.body,
        added: new Date()
    }
    messages.push(newMessage);
    res.redirect("/")
})

export default newMessagesRouter;