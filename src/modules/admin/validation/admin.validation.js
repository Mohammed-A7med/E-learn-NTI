import Joi from "joi";

export const getUserByIdSchema = {
  params: Joi.object({
    id: Joi.string().hex().length(24).required(),
  }),
};

export const updateUserRoleSchema = {
  params: Joi.object({
    id: Joi.string().hex().length(24).required(),
  }),

  body: Joi.object({
    role: Joi.string().valid("student", "instructor", "admin").required(),
  }),
};

export const deleteUserSchema = {
  params: Joi.object({
    id: Joi.string().hex().length(24).required(),
  }),
};