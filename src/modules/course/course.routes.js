import express from "express";
import * as CourseController from "./course.controller.js";
import * as CourseValidation from "./validation/course.validation.js";
import { ValidationRequest } from "../../middlewares/validation.middleware.js";
const courseRouter = express.Router();

courseRouter.get("/", CourseController.getAllCourses);

courseRouter.post("/", ValidationRequest(CourseValidation.createCourseSchema), CourseController.createCourse);

courseRouter.get("/:id", ValidationRequest(CourseValidation.getCourseByIdSchema), CourseController.getCourseById);

courseRouter.put("/:id",ValidationRequest(CourseValidation.updateCourseSchema), CourseController.updateCourseById);

courseRouter.delete("/:id", ValidationRequest(CourseValidation.deleteCourseSchema), CourseController.deleteCourseById);

export default courseRouter;
