import mongoose from "mongoose";

const InternshipsSchema = new mongoose.Schema(
	{ url: String },
	{ timestamps: true }
);

export default InternshipsSchema;
