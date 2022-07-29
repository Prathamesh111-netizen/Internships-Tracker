import express from "express";
import dotenv from "dotenv";
import Database from "./src/db/index.js";
import routes from "./src/apis/routes/index.js";
import cors from "cors";
const app = express();

dotenv.config();

const mongoCluster = new Database();
mongoCluster.connect();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Parse cookies bodies
// app.use(cookieParser());

// parse cross origin requests
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
	express.json({
		type: ["application/json", "text/plain"]
	})
);

app.use("/", routes);

app.listen(process.env.PORT, () => {
	console.log(`server listening on ${process.env.PORT}`);
});
