import express from "express";
import helmet from "helmet";
import productRoutes from "./routes/products.js";
import userRoutes from "./routes/users.js";

const app = express();
const port = 5070;

app.use(express.json());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Sinus webshop api");
});

app.use("/products", productRoutes);

app.use("/users", userRoutes);

app.get("*", (req, res) => {
  res.send("Error: Nothin here");
});

const server = app.listen(port, () => {
  console.log(`Local app listening att http://localhost:${port}`);
});
