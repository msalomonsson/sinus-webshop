import express from "express";
import { getUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/:uid", getUser);

router.patch("/:id", updateUser);

export default router;
