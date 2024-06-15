import express from "express";
import cors from "cors";
import "dotenv/config";
import { mongoDBConnection } from "./config/mongoDB.js";
import { userRouter } from "./routes/userRoute.js";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

mongoDBConnection();

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`server is started on http://localhost:${PORT}`);
});
