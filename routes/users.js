import express from "express";
import { createUser, getUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/:uid", getUser);

router.patch("/:id", updateUser);

router.post("/createUser", createUser);

export default router;
