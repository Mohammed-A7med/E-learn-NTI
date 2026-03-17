import User from "../../../DB/models/user.model.js";
import {
  createConflictError,
  createNotFoundError,
} from "../../../utils/APIErrors.js";

export const getUsers = async () => {
  const users = await User.find({ isDeleted: false }).select("-password");
  if (!users) {
    throw createConflictError("no users Exists");
  }
  return users;
};

export const getUserById = async (id) => {
  const existUser = await User.findById(id);
  if (!existUser) {
    throw createNotFoundError("User not found");
  }
  return existUser;
};

export const updateUserRole = async (id, role) => {
  const user = await User.findByIdAndUpdate(id, { role }, { new: true });
  if (!user) {
    throw createNotFoundError("User not found");
  }

  return user;
};

export const deleteUserById = async (id) => {
  const user = await User.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  if (!user) {
    throw createNotFoundError("User not found");
  }
  return user;
};
