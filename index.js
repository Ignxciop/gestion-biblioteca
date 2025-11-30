import express from "express";
import authRoutes from "./src/routes/user.route.js";
import { port } from "./src/config/config.js";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, () =>
    console.log("Servidor corriendo en » http://localhost:" + port)
);
