import express from "express";
import path from "path";

import postService from "../services/post";
import multer from "multer";
import cors from "cors";

const app = express();
const router = express.Router();

// middlewares
app.use(cors());

app.use(
  multer({ dest: path.join(__dirname, "../public/uploads") }).single("image")
);

// routes
router.get("/", function (req, res) {
  res.send(postService.save());
});

router.get("/all", async function (req, res) {
  const postList = await postService.list();
  res.json(postList);
});

router.post("/new", async (req, res) => {
  const postList = await postService.save(req.body);
  res.send(postList);
});

router.post("/save-image", (req, res) => {
  console.log(req);
  res.send(req.file);
});

module.exports = router;
