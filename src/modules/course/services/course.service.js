import Course from "../../../DB/models/course.model.js";
import { createConflictError } from "../../../utils/APIErrors.js";

export const createCourse = async (courseData) => {
  const existCourse = await Course.findOne({ title: courseData.title });

  if (existCourse) {
    throw createConflictError("Course already exists");
  }

  const course = await Course.create(courseData);
  return course;
};

export const getAllCourses = async () => {
  const courses = await Course.find();

  if (courses.length === 0) {
    throw createNotFoundError("No courses found");
  }

  return courses;
};

export const getCourseById = async (id) => {
  const existCourse = await Course.findById(id);
  if (!existCourse) {
    throw createNotFoundError("Course not found");
  }
  return existCourse;
};

export const updateCourseById = async (id, updateData) => {
  const course = await Course.findByIdAndUpdate(id, updateData, { new: true });
  if (!course) {
    throw createNotFoundError("course not found");
  }

  return course;
};

export const deleteCourseById = async (id) => {
  const course = await Course.findByIdAndDelete(id);
  
  if (!course) {
    throw createNotFoundError("Course not found");
  }

  return course;
};
