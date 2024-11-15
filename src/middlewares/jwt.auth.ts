import { NextFunction, Request, Response } from "express";
import ApplicationLevelError from "../modules/application.error";
import Token from "../utils/token";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearerToken: string =
      req.headers["authorization"] || req.body || req.query;
    if (!bearerToken) {
      throw new ApplicationLevelError(400, "Access Denied");
    }
    const token: string | undefined = bearerToken.split(" ")[1];
    if (!token) {
      throw new ApplicationLevelError(400, "Incorrect Token");
    }
    const payload = Token.verifyAccessToken(token);
    const { id } = payload;
    (req as any)._id = id;
  } catch (error: any) {
    next(error);
  }
};
