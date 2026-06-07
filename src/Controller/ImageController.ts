import { Request, Response } from "express";
import AWSService from "../Services/AWSService";

export const getLandingPageImages = (req: Request, res: Response) => {
  try {
    const awsService = new AWSService();
    const imageKeys = [awsService.getImageURL("Website-Images/Landing/LendingImage1-Bonfire.jpg"), awsService.getImageURL("Website-Images/Landing/LendingImage2-Beach.jpg.jpg")];
    return res.send({
      success: true,
      data: imageKeys,
    });
  } catch (err) {
    console.error("Error fetching landing page images:", err);
    return res.status(500).send({
      success: false,
      message: "Failed to fetch landing page images",
    });
  }
};
