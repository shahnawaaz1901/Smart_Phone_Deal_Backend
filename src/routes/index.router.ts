import { Router } from "express";
import userRouter from "../features/users/users.router";
import permissionRouter from "../features/permissions/permissions.router";
import roleRouter from "../features/roles/roles.router";

const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/permissions", permissionRouter);
indexRouter.use("/roles", roleRouter);

export default indexRouter;
