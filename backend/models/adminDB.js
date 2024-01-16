const mongoose = require("mongoose");

const adminDB = new mongoose.Schema({
	email: {
	type: String,
	required: true,
	unique: true,
	},
	password: {
	type: String,
	required: true,
	},
	createdAt: {
	type: Date,
	default: Date.now,
	},
});

const Admin = mongoose.model("Admin", adminDB);

module.exports = Admin;
