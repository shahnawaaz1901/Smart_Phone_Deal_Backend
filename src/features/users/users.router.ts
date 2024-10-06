import { Router, Request, Response, NextFunction } from "express";
import UserController from "./users.controller";

const userRouter = Router();
const userController = new UserController();

userRouter.post(
  "/signup",
  (req: Request, res: Response, next: NextFunction) => {
    userController.signup(req, res, next);
  }
);

userRouter.post(
  "/signin",
  (req: Request, res: Response, next: NextFunction) => {
    userController.signin(req, res, next);
  }
);

userRouter.post(
  "/refresh-token",
  (req: Request, res: Response, next: NextFunction) => {
    userController.refreshToken(req, res, next);
  }
);

export default userRouter;
