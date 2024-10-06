import { Router } from "express";
import userRouter from "./users/users.router";

const indexRouter = Router();

indexRouter.use("/api/users", userRouter);
export default indexRouter;
