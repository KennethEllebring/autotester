const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const {SECRET_URL} = process.env;

async function main() {
  const connection = await MongoClient.connect(SECRET_URL);

  const database = connection.db("nackademin");

  const collection = database.collection("users");

  const users = await collection.find().toArray();

  console.log(users);
}

main();
