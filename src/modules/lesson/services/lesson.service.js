import Lesson from "../../../DB/models/lesson.model.js";
import { createConflictError } from "../../../utils/APIErrors.js";

export const createLesson = async (lessonData) => {
  const existLesson = await Lesson.findOne({ title: lessonData.title });

  if (existLesson) {
    throw createConflictError("Lesson already exists");
  }

  const lesson = await Lesson.create(lessonData);
  return lesson;
};

export const getAllLessons = async () => {
  const lessons = await Lesson.find();

  if (lessons.length === 0) {
    throw createNotFoundError("No lessons found");
  }

  return lessons;
};

export const getLessonById = async (id) => {
  const existLesson = await Lesson.findById(id);
  if (!existLesson) {
    throw createNotFoundError("Course not found");
  }
  return existLesson;
};

export const updateLessonById = async (id, updateData) => {
  const lesson = await Lesson.findByIdAndUpdate(id, updateData, { new: true });
  if (!lesson) {
    throw createNotFoundError("Lesson not found");
  }

  return lesson;
};

export const deleteLessonById = async (id) => {
  const lesson = await Lesson.findByIdAndDelete(id);
  
  if (!lesson) {
    throw createNotFoundError("Lesson not found");
  }

  return lesson;
};
