import express from "express";
import dotenv from "dotenv-flow";
import logger from "morgan";
import { port, appUrl } from "./config/env";
import MainRoutes from "./routes";
import cors from "cors";

const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(cors());
dotenv.config({ silent: true });

app.use("/api", MainRoutes);

app.listen(port, () => {
	console.log(`\n This server is running on ${appUrl}:${process.env.APP_PORT}`);
});
