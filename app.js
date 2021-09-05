import express from "express";
import cors from "cors";
import "./connection";
import bodyParser from "body-parser";
import posts from "./src/routes/post";

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

app.get("/", function (req, res) {
  res.send("WORKK !!!");
});

app.use("/post", posts);

export default app;
