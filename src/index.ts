import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import Responses from "./modules/responses";
import indexRouter from "./routes/index.router";
import ApplicationLevelError from "./modules/application.error";
import morgan from "morgan";
import fs from "fs";
import path from "path";

const app = express();

app.use(cors({ methods: "*", origin: "*" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  morgan("combined", {
    skip: (req, res) => {
      return res.statusCode < 400;
    },
    stream: fs.createWriteStream(path.join("src", "logs", "errors.log")),
  })
);

app.use("/api", indexRouter);

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  Responses.generateSuccessfulResponse(res, 200, {
    message: "Node.Js with Typescript working !!",
  });
});

app.use((err: any, req: Request, res: Response, next: NextFunction): any => {
  if (err instanceof ApplicationLevelError) {
    return Responses.generateErrorResponse(res, err.statusCode, {
      message: err.message,
    });
  }
  Responses.generateErrorResponse(res, 500, {
    message: "Internal Server Error",
  });
});

app.use((req: Request, res: Response, next: NextFunction): any => {
  return Responses.generateErrorResponse(res, 404, {
    message: "Resource not found !!",
  });
});
export default app;
