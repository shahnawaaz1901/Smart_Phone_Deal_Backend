import { Router, Request, Response, NextFunction } from "express";

const userRouter = Router();

userRouter.post(
  "/signup",
  (req: Request, res: Response, next: NextFunction) => {}
);

userRouter.post(
  "/signin",
  (req: Request, res: Response, next: NextFunction) => {}
);

userRouter.post(
  "/refresh-token",
  (req: Request, res: Response, next: NextFunction) => {}
);

export default userRouter;
