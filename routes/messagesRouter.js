import { Router } from "express";
import rootController from "../controller/rootController.js";

const messagesRouter = Router();

messagesRouter.get("/:id", rootController.getMessageById);

export default messagesRouter;
