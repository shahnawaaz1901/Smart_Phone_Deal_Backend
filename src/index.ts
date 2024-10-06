import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors({ methods: "*", origin: "*" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res
    .status(200)
    .json({ success: true, message: "Node.Js with Typescript working !!" });
});
export default app;
