import express from "express";
import {
  getProducts,
  getProductByCategory,
  getProductByCategoryId,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:category", getProductByCategory);

router.get("/:category/:id", getProductByCategoryId);

export default router;
