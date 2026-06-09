import { body } from "express-validator";

export const CreateRoomValidation = [
    body("tripName").isString().withMessage("Trip name must be a string"),
    body("tripPurpose").isString().withMessage("Trip purpose must be a string"),
    body("tripType").isString().withMessage("Trip type must be a string"),
    body("tripDescription").isString().withMessage("Trip description must be a string"),
    body("startDate").isISO8601().withMessage("Trip start date must be a valid date"),
    body("endDate").isISO8601().withMessage("Trip end date must be a valid date"),
    body("createdBy").isString().withMessage("Created by must be a string"),
    body("CreatedByMailID").isEmail().withMessage("Created by mail ID must be a valid email"),
];