import { successResponse } from "../../../utils/APIResponse.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import * as EnrollmentsService from "./services/enrollment.service.js";

export const createEnrollment = asyncHandler(async (req, res) => {
  const enrollment = await EnrollmentsService.createEnrollment(req.body);

  return res.json(
    successResponse({
      enrollment,
      message: "Enrollment created successfully",
    }),
  );
});

export const getAllEnrollment = asyncHandler(async (req, res) => {
  const enrollments = await EnrollmentsService.getAllEnrollments();

  return res.json(
    successResponse({
      enrollments,
      message:"All enrollments loaded successfully"
    }),
  );
});


export const deleteEnrollmentById = asyncHandler(async (req, res) => {
  const enrollment = await EnrollmentsService.deleteEnrollmentById(req.params.id);

  return res.json(
    successResponse({
      enrollment,
      message: "Enrollment deleted successfully",
    }),
  );
});
