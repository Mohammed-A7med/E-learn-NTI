import Enrollment from "../../../../DB/models/enrollment.model.js";
import { createConflictError } from "../../../../utils/APIErrors.js";

export const createEnrollment = async (enrollmentData) => {
  const existEnrollment = await Enrollment.findOne({
    student: enrollmentData.student,
    course: enrollmentData.course,
  });

  if (existEnrollment) {
    throw createConflictError("Student is already enrolled in this course");
  }

  const enrollment = await Enrollment.create(enrollmentData);
  return enrollment;
};

export const getAllEnrollments = async () => {
  const enrollments = await Enrollment.find()
    .populate("student", "name email")
    .populate("course", "title description");

  if (enrollments.length === 0) {
    throw createNotFoundError("No enrollments found");
  }

  return {
    message: "Enrollments retrieved successfully",
    enrollments,
  };
};

export const deleteEnrollmentById = async (id) => {
  const enrollment = await Enrollment.findByIdAndDelete(id);

  if (!enrollment) {
    throw createNotFoundError("Enrollment not found");
  }

  return {
    message: "Enrollment deleted successfully",
    enrollment,
  };
};