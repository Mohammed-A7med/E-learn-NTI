import Joi from "joi";

const objectId = Joi.string().hex().length(24);

const lessonTypes = ["video", "text", "quiz", "assignment"];

const videoSchema = Joi.object({
  url: Joi.string().uri(),
  publicId: Joi.string(),
  duration: Joi.number().min(0),
});

export const createLessonSchema = {
  body: Joi.object({
    title: Joi.string().trim().min(3).max(200).required(),

    course: objectId.required(),

    description: Joi.string().allow("").optional(),

    content: Joi.string().optional(),

    type: Joi.string()
      .valid(...lessonTypes)
      .default("video"),

    duration: Joi.number().min(0).optional(),

    order: Joi.number().min(0).default(0),

    isPublished: Joi.boolean().default(false),

    video: videoSchema.optional(),
  }),
};

export const getLessonByIdSchema = {
  params: Joi.object({
    id: objectId.required(),
  }),
};

export const updateLessonSchema = {
  params: Joi.object({
    id: objectId.required(),
  }),

  body: Joi.object({
    title: Joi.string().trim().min(3).max(200),

    course: objectId,

    description: Joi.string().allow(""),

    content: Joi.string(),

    type: Joi.string().valid(...lessonTypes),

    duration: Joi.number().min(0),

    order: Joi.number().min(0),

    isPublished: Joi.boolean(),

    video: videoSchema,
  }).min(1),
};

export const deleteLessonSchema = {
  params: Joi.object({
    id: objectId.required(),
  }),
};
