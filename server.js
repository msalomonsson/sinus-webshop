import express from "express";
import productRoutes from "./routes/products.js";

const app = express();
const port = 5070;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Sinus webshop api");
});

app.use("/products", productRoutes);

app.get("*", (req, res) => {
  res.send("Error: Nothin here");
});

const server = app.listen(port, () => {
  console.log(`Local app listening att http://localhost:${port}`);
});
