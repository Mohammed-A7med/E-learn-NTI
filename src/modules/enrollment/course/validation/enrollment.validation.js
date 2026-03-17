import Joi from "joi";

const objectId = Joi.string().hex().length(24);

const enrollmentStatus = ["active", "completed", "cancelled"];

/* ------------------- Create Enrollment ------------------- */

export const createEnrollmentSchema = {
  body: Joi.object({
    student: objectId.required(),

    course: objectId.required(),

    status: Joi.string().valid(...enrollmentStatus).default("active"),

    progress: Joi.number().min(0).max(100).default(0),

    completedLessons: Joi.number().min(0).default(0),
  }),
};

/* ------------------- Delete Enrollment ------------------- */

export const deleteEnrollmentSchema = {
  params: Joi.object({
    id: objectId.required(),
  }),
};