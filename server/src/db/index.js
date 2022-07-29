import mongoose from "mongoose";

import { InternshipsSchema } from "./Models/index.js";

class Database {
	constructor() {
		if (!Database.instance) Database.instance = this;
		return Database.instance;
	}

	connect() {
		mongoose.connect(
			`mongodb+srv://prathamesh:pratham1109@cluster0.npbleiw.mongodb.net/?retryWrites=true&w=majority`,
			{ useNewUrlParser: true }
		);

		mongoose.connection.on("connected", () => {
			console.log("mongoDb connected");
		});

		this.Internships = mongoose.model("Internships", InternshipsSchema);
	}

	static getInstance() {
		return Database.instance;
	}
}

export default Database;
