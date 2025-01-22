import { Router } from "express";
import messages from "../model/messages.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

export default indexRouter;
