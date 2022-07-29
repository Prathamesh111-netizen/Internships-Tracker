import express from "express";
import dotenv from "dotenv";
import Database from "./src/db/index.js";
import routes from "./src/apis/routes/index.js";
const app = express();

dotenv.config();

const mongoCluster = new Database();
mongoCluster.connect();

app.use(express.json({ limit: "1mb" }));

app.use(
	express.urlencoded({
		limit: "1mb",
		extended: true
	})
);

app.use("/", routes);

app.listen(process.env.PORT, () => {
	console.log(`server listening on ${process.env.PORT}`);
});
