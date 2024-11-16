import { Router } from "express";
import RoleController from "./roles.controller";
import { auth } from "../../middlewares/jwt.auth";
import { adminAuth } from "../../middlewares/admin.auth";

const roleRouter = Router();
const roleController = new RoleController();

roleRouter.post("/addRole", auth, adminAuth, roleController.createRole);
roleRouter.get("/getRoles", auth, adminAuth, roleController.getRoles);
roleRouter.patch("/updateRole", auth, adminAuth, roleController.updateRole);
roleRouter.delete("/deleteRole", auth, adminAuth, roleController.deleteRole);

export default roleRouter;
