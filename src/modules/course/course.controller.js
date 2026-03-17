import { successResponse } from "../../utils/APIResponse.js";
import { asyncHandler } from "./../../utils/asyncHandler.js";
import * as CoursesService from "./services/course.service.js";

export const createCourse = asyncHandler(async (req, res) => {
  const courses = await CoursesService.createCourse(req.body);

  return res.json(
    successResponse({
      courses,
      message: "Course created successfully",
    }),
  );
});

export const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await CoursesService.getAllCourses();

  return res.json(
    successResponse({
      courses,
      message:"All courses loaded successfully"
    }),
  );
});

export const getCourseById = asyncHandler(async (req, res) => {
  const course = await CoursesService.getCourseById(req.params.id);

  return res.json(
    successResponse({
      course,
      message: "Course details fetched successfully",
    }),
  );
});

export const updateCourseById = asyncHandler(async (req, res) => {
  const course = await CoursesService.updateCourseById(req.params.id , req.body);

  return res.json(
    successResponse({
      course,
      message: "Course updated successfully",
    }),
  );
});

export const deleteCourseById = asyncHandler(async (req, res) => {
  const course = await CoursesService.deleteCourseById(req.params.id);

  return res.json(
    successResponse({
      course,
      message: "Course deleted successfully",
    }),
  );
});
