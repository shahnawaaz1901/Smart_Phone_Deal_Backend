import { NextFunction, Request, Response } from "express";

export default class UserController {
  async signup(req: Request, res: Response, next: NextFunction) {}
  async signin(req: Request, res: Response, next: NextFunction) {}
  async refreshToken(req: Request, res: Response, next: NextFunction) {}
}
