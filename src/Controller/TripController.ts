import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { docClient } from "../index";

export const createRoom = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ success: false, errors: errors.array() });
    }
    const {
      tripName,
      tripPurpose,
      tripType,
      tripDescription,
      startDate,
      endDate,
      createdBy,
      CreatedByMailID,
    } = req.body;
    const currentDate = new Date();
    const roomId =
      createdBy.split(" ")[0][0] +
      createdBy.split(" ")[1][0] +
      currentDate.getMilliseconds() +
      currentDate.getSeconds() +
      currentDate.getMinutes() +
      currentDate.getHours() +
      currentDate.getDate() +
      (currentDate.getMonth() + 1) +
      currentDate.getFullYear();

    const command = new PutCommand({
      TableName: "Trips_Details",
      Item: {
        RoomID: roomId,
        CreatedBy: createdBy,
        CreatedByMailID: CreatedByMailID,
        TripName: tripName,
        TripPurpose: tripPurpose,
        TripType: tripType,
        TripDescription: tripDescription,
        StartDate: startDate,
        EndDate: endDate,
        CreatedAt: currentDate.toISOString(),
      },
    });

    const dbResponse = await docClient.send(command);
    console.log("Room created successfully:", dbResponse);
    return res.send({ success: true, data: { roomId } });
  } catch (error) {
    console.log("Error creating room:", error);
    return res.send({ success: false });
  }
};
