import cors from "cors";
import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
  });
});

export default app;
