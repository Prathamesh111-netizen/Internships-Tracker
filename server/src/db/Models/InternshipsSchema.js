import mongoose from "mongoose";

const InternshipsSchema = new mongoose.Schema(
	{
		url: String,
		image: String,
		role: String,
		location: String,
		deadline: String
	},
	{ timestamps: true }
);

export default InternshipsSchema;
