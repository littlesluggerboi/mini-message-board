import { Router } from "express";
import rootController from "../controller/rootController.js";

const indexRouter = Router();

indexRouter.get("/", rootController.getMessages);

export default indexRouter;
