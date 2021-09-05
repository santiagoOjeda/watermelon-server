import express from "express";
import cors from "cors";
import "./connection";
import bodyParser from "body-parser";
import posts from "./src/routes/post";

const PORT = process.env.PORT || 5050;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser());

app.get("/", function (req, res) {
  res.send("WORKK !!!");
});

app.use("/post", posts);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
