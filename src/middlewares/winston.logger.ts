import { NextFunction, Request, Response } from "express";
import winston from "winston";

const logger = new winston.Logger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({
      filename: "combined.log",
      level: "combined",
    }),
  ],
});

const winstonLogger = (req: Request, res: Response, next: NextFunction) => {
  if (!req.path.includes("users")) {
    const logObject = {
      url: req.url,
      body: req.body,
      timestamp: new Date().toISOString(),
    };
    logger.info(logObject);
  }
  next();
};
export default winstonLogger;
