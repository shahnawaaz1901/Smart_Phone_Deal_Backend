import { NextFunction, Request, Response } from "express";
import ApplicationLevelError from "../../modules/application.error";
import UserRepository from "./users.repository";
import Responses from "../../modules/responses";
import bcrypt from "bcrypt";
import Token from "../../utils/token";

const userRepository = new UserRepository();
export default class UserController {
  async signup(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { name, email, phone, gender, password } = req.body;
      if (!name || !email || !phone || !password || !gender) {
        throw new ApplicationLevelError(400, "Provide Required fields !!");
      }
      const newUser = await userRepository.createUser({
        name,
        email,
        phone,
        gender,
        password: bcrypt.hashSync(password, 12),
      });
      return Responses.generateSuccessfulResponse(res, 201, { user: newUser });
    } catch (error: any) {
      next(error);
    }
  }
  async signin(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { email, password } = req.body;
      const user = await userRepository.getUser({ email });
      if (!user) {
        throw new ApplicationLevelError(400, "Account not Exists !!");
      }
      const passwordMatch: boolean = bcrypt.compareSync(
        password,
        user.password
      );
      if (!passwordMatch) {
        throw new ApplicationLevelError(401, "Incorrect Password !!");
      }
      const { accessToken, refreshToken } =
        Token.generateAccessAndRefreshTokens(user.id);
      return Responses.generateSuccessfulResponse(res, 200, {
        accessToken,
        refreshToken,
        isAuth: true,
      });
    } catch (error: any) {
      next(error);
    }
  }
  async refreshToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      throw new ApplicationLevelError(400, "Please Provide Refresh Token");
    }
  }
}
