import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import Responses from "./modules/responses";
import indexRouter from "./features/index.router";

const app = express();

app.use(cors({ methods: "*", origin: "*" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  Responses.generateSuccessfulResponse(res, 200, {
    message: "Node.Js with Typescript working !!",
  });
});

app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
  Responses.generateErrorResponse(res, 500, {
    message: "Internal Server Error",
  });
});

app.use((req: Request, res: Response, next: NextFunction): void => {
  Responses.generateErrorResponse(res, 404, {
    message: "Resource not found !!",
  });
});
export default app;
