import app from "./app";
import cors from "cors";

const PORT = process.env.PORT || 5050;

app.use(cors());
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
