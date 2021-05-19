import express from "express";
import { getUser } from "../controllers/users.js";

const router = express.Router();

router.get("/:uid", getUser);

export default router;
