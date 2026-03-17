import { successResponse } from "../../utils/APIResponse.js";
import { asyncHandler } from "./../../utils/asyncHandler.js";
import * as LessonsService from "./services/lesson.service.js";

export const createLesson = asyncHandler(async (req, res) => {
  const lessons = await LessonsService.createLesson(req.body);

  return res.json(
    successResponse({
      lessons,
      message: "Lesson created successfully",
    }),
  );
});

export const getAllLessons = asyncHandler(async (req, res) => {
  const lessons = await LessonsService.getAllLessons();

  return res.json(
    successResponse({
      lessons,
      message:"All lessons loaded successfully"
    }),
  );
});

export const getLessonById = asyncHandler(async (req, res) => {
  const lesson = await LessonsService.getLessonById(req.params.id);

  return res.json(
    successResponse({
      lesson,
      message: "Lesson details fetched successfully",
    }),
  );
});

export const updateLessonById = asyncHandler(async (req, res) => {
  const lesson = await LessonsService.updateLessonById(req.params.id , req.body);

  return res.json(
    successResponse({
      lesson,
      message: "Lesson updated successfully",
    }),
  );
});

export const deleteLessonById = asyncHandler(async (req, res) => {
  const lesson = await LessonsService.deleteLessonById(req.params.id);

  return res.json(
    successResponse({
      lesson,
      message: "Lesson deleted successfully",
    }),
  );
});
