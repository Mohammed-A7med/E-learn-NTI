import express from "express";
import * as AdminController from "./admin.controller.js";
import { ValidationRequest } from "../../middlewares/validation.middleware.js";
import * as adminValidation from "./validation/admin.validation.js";
const adminRouter = express.Router();

adminRouter.get("/users", AdminController.getAllUsers);

adminRouter.get(
  "/users/:id",
  ValidationRequest(adminValidation.getUserByIdSchema),
  AdminController.getUserById,
);

adminRouter.put(
  "/users/:id/role",
  ValidationRequest(adminValidation.updateUserRoleSchema),
  AdminController.updateUserRoleById,
);

adminRouter.delete(
  "/users/:id",
  ValidationRequest(adminValidation.deleteUserSchema),
  AdminController.DeleteUserById,
);

export default adminRouter;
