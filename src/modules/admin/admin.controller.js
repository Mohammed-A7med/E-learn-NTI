import * as AdminService from "./services/admin.service.js";
import { asyncHandler } from "./../../utils/asyncHandler.js";
import { createResponse, successResponse } from "../../utils/APIResponse.js";

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await AdminService.getUsers();

  return res.json(
    successResponse({
      users,
    }),
  );
});

export const getUserById = asyncHandler(async (req, res) => {
  const user = await AdminService.getUserById(req.params.id);

  return res.json(
    successResponse({
      user,
    }),
  );
});

export const updateUserRoleById = asyncHandler(async (req, res) => {
  const user = await AdminService.updateUserRole(req.params.id, req.body.role);

  return res.json(
    successResponse({
      user,
    }),
  );
});

export const DeleteUserById = asyncHandler(async (req, res) => {
  const user = await AdminService.deleteUserById(req.params.id);

  return res.json(
    successResponse({
      user,
      message: "User deleted successfully",
    }),
  );
});
