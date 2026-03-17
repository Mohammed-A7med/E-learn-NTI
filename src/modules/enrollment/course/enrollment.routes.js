import express from "express";
import * as EnrollmentController from "./enrollment.controller.js";
import * as EnrollmentValidation from "./validation/enrollment.validation.js";
import { ValidationRequest } from "../../../middlewares/validation.middleware.js";
const enrollmentRouter = express.Router();

enrollmentRouter.get("/", EnrollmentController.getAllEnrollment);

enrollmentRouter.post("/",ValidationRequest(EnrollmentValidation.createEnrollmentSchema) , EnrollmentController.createEnrollment);

enrollmentRouter.delete("/:id",ValidationRequest(EnrollmentValidation.deleteEnrollmentSchema)  ,  EnrollmentController.deleteEnrollmentById);

export default enrollmentRouter;
