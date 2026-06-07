import { Router } from "express";
import { getLandingPageImages } from "../Controller/ImageController";

const router = Router();

router.get("/landingPageImages", getLandingPageImages);

export default router;
