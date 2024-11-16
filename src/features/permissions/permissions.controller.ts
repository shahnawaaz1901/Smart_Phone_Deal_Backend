import { NextFunction, Request, Response } from "express";

export default class PermissionController {
  createPermission(req: Request, res: Response, next: NextFunction) {}
  getPermissions(req: Request, res: Response, next: NextFunction) {}
  updatePermission(req: Request, res: Response, next: NextFunction) {}
  deletePermission(req: Request, res: Response, next: NextFunction) {}
}
