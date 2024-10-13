import jwt from "jsonwebtoken";
import { AccessToken, Payload, RefreshToken } from "../types/token.types";

export default class Token {
  static generateAccessToken(id: string): AccessToken {
    const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRY } = process.env;
    const accessToken = jwt.sign({ id }, ACCESS_TOKEN_SECRET as string, {
      expiresIn: ACCESS_TOKEN_EXPIRY as string,
    });
    return { accessToken };
  }
  static generateRefreshToken(id: string): RefreshToken {
    const { REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRY } = process.env;
    const refreshToken = jwt.sign({ id }, REFRESH_TOKEN_SECRET as string, {
      expiresIn: REFRESH_TOKEN_EXPIRY as string,
    });
    return { refreshToken };
  }
  static generateAccessAndRefreshTokens(
    id: string
  ): AccessToken & RefreshToken {
    const { accessToken } = this.generateAccessToken(id);
    const { refreshToken } = this.generateRefreshToken(id);
    return { accessToken, refreshToken };
  }
  static verifyAccessToken(accessToken: string): Payload {
    try {
      const { ACCESS_TOKEN_SECRET } = process.env;
      const payload = jwt.verify(accessToken, ACCESS_TOKEN_SECRET as string);
      return payload;
    } catch (error) {
      throw error;
    }
  }
  static verifyRefreshToken(refreshToken: string): Payload {
    try {
      const { REFRESH_TOKEN_SECRET } = process.env;
      const payload = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET as string);
      return payload;
    } catch (error) {
      throw error;
    }
  }
}
