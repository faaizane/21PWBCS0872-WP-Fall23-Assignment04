const { MongoClient } = require("mongodb");
const fs = require("fs");

const uri = "mongodb://localhost:27017";
const databaseName = "WhimsyWood";
const collectionName = "products";

async function insertData() {
	try {
		const client = new MongoClient(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		await client.connect();

		const database = client.db(databaseName);
		const collection = database.collection(collectionName);

		const jsonData = fs.readFileSync("./Products.json", "utf-8");
		const data = JSON.parse(jsonData);

		const result = await collection.insertMany(data);

		console.log(`${result.insertedCount} documents inserted`);

		await client.close();
	} catch (error) {
		console.error("Error inserting data:", error);
	}
}

insertData();
