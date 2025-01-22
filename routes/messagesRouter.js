import { Router } from "express";
import messages from "../model/messages.js";

const messagesRouter = Router();

messagesRouter.get("/:id", (req, res, next) => {
  if (req.params.id && parseInt(req.params.id) < messages.length) {
    const id = parseInt(req.params.id);
    const message = messages[id];
    res.render("message_detail.ejs", { message: message });
  } else {
    res.status(404).send("Message Not Found");
  }
});

export default messagesRouter;
