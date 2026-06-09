import { Router } from "express";
import { createRoom } from "../Controller/TripController";
import { CreateRoomValidation } from "../Validations/TripValidation";

const router = Router();

router.post("/createRoom", CreateRoomValidation, createRoom);

export default router;