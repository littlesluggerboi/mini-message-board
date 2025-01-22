import express from "express";
import dotenv from "dotenv";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js"
import newMessagesRouter from "./routes/newMessagesRouter.js"
import messagesRouter from "./routes/messagesRouter.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();


app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMessagesRouter)
app.use("/messages", messagesRouter)

app.use((err, req, res, next)=>{
  console.log(err.message);
  res.status(500).send("Error 500 | Internal Error");
})

app.use((req, res)=>{
    res.status(404).send("Error 404 | Not Found")
})


app.listen(PORT, () => {
  console.log(`listening at port: ${PORT}`);
});
