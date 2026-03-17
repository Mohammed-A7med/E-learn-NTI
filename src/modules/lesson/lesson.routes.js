import express from "express";
import * as LessonController from "./lesson.controller.js";
import * as LessonValidation from "./validation/lesson.validation.js";
import { ValidationRequest } from "../../middlewares/validation.middleware.js";
const lessonRouter = express.Router();

lessonRouter.get("/", LessonController.getAllLessons);

lessonRouter.post("/",ValidationRequest(LessonValidation.createLessonSchema) , LessonController.createLesson);

lessonRouter.get("/:id",ValidationRequest(LessonValidation.getLessonByIdSchema) , LessonController.getLessonById);

lessonRouter.put("/:id", ValidationRequest(LessonValidation.updateLessonSchema),  LessonController.updateLessonById);

lessonRouter.delete("/:id", ValidationRequest(LessonValidation.deleteLessonSchema), LessonController.deleteLessonById);

export default lessonRouter;
