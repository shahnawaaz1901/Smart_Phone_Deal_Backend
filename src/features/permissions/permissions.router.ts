import { Router } from "express";
import PermissionController from "./permissions.controller";
import { auth } from "../../middlewares/jwt.auth";
import { adminAuth } from "../../middlewares/admin.auth";

const permissionRouter = Router();
const permissionController = new PermissionController();

permissionRouter.post(
  "/addPermission",
  auth,
  adminAuth,
  permissionController.createPermission
);
permissionRouter.get(
  "/getPermissions",
  auth,
  adminAuth,
  permissionController.getPermissions
);
permissionRouter.patch(
  "/updatePermission",
  auth,
  adminAuth,
  permissionController.updatePermission
);
permissionRouter.delete(
  "/deletePermission",
  auth,
  adminAuth,
  permissionController.deletePermission
);

export default permissionRouter;
