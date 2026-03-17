import Joi from "joi";

const objectId = Joi.string().hex().length(24);

const courseLevels = ["beginner", "intermediate", "advanced", "all_levels"];

const courseStatus = ["draft", "published", "archived"];

const thumbnailSchema = Joi.object({
  url: Joi.string().uri(),
  publicId: Joi.string(),
});

/* ------------------- Create Course ------------------- */

export const createCourseSchema = {
  body: Joi.object({
    title: Joi.string().trim().min(3).max(200).required(),

    description: Joi.string().min(10).required(),

    instructor: objectId.required(),

    thumbnail: thumbnailSchema.optional(),

    price: Joi.number().min(0).default(0),

    level: Joi.string().valid(...courseLevels).default("beginner"),

    duration: Joi.number().min(0).default(0),

    status: Joi.string().valid(...courseStatus).default("draft"),

    isActive: Joi.boolean().default(true),
  }),
};

/* ------------------- Get Course By Id ------------------- */

export const getCourseByIdSchema = {
  params: Joi.object({
    id: objectId.required(),
  }),
};

/* ------------------- Update Course ------------------- */

export const updateCourseSchema = {
  params: Joi.object({
    id: objectId.required(),
  }),

  body: Joi.object({
    title: Joi.string().trim().min(3).max(200),

    description: Joi.string().min(10),

    instructor: objectId,

    thumbnail: thumbnailSchema,

    price: Joi.number().min(0),

    level: Joi.string().valid(...courseLevels),

    duration: Joi.number().min(0),

    status: Joi.string().valid(...courseStatus),

    isActive: Joi.boolean(),
  }).min(1),
};

/* ------------------- Delete Course ------------------- */

export const deleteCourseSchema = {
  params: Joi.object({
    id: objectId.required(),
  }),
};