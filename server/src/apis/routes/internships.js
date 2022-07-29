import express from "express";
import Database from "../../db/index.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const db = Database.getInstance();
		const { Internships } = db;

		const data = await Internships.find();
		res.send(data);
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const db = Database.getInstance();
		const { Internships } = db;

		const InternshipsDetails = req.body;
		console.log(InternshipsDetails);
		const data = await Internships.create(InternshipsDetails);
		res.send(data);
	} catch (error) {
		next(error);
	}
});

router.get("/:_id", async (req, res, next) => {
	try {
		const db = Database.getInstance();
		const { Internships } = db;

		const { _id } = req.params;
		const data = await Internships.findById(_id);
		res.send(data);
	} catch (error) {
		next(error);
	}
});

router.put("/:_id", async (req, res, next) => {
	try {
		const db = Database.getInstance();
		const { Internships } = db;

		const { _id } = req.params;
		const update = req.body;
		const data = await Internships.findOneAndUpdate(_id, update);
		res.send(data);
	} catch (error) {
		next(error);
	}
});

router.delete("/:_id", async (req, res, next) => {
	try {
		const db = Database.getInstance();
		const { Internships } = db;

		const { _id } = req.params;
		const data = await Internships.deleteOne({ _id });
		res.send(data);
	} catch (error) {
		next(error);
	}
});

export default router;
