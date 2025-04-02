import { Router } from "express";
import rootController from "../controller/rootController.js";

const newMessagesRouter = Router();

newMessagesRouter.get("/", rootController.getNewMessage)

newMessagesRouter.post("/", rootController.postNewMessage)

export default newMessagesRouter;