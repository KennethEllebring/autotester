const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const {SECRET_URL} = process.env;

async function main() {
  const connection = await MongoClient.connect(SECRET_URL);

  const database = connection.db("nackademin");

  const usersCollection = database.collection("users");

  // add user to users
  //   const result = await usersCollection.insertOne({username: "Emil", age: "unknown", prof: "webdeveloper"});
  //   const result = await usersCollection.insertOne({username: "Alex", age: "unknown", prof: "webdeveloper"});
  //   const result = await usersCollection.insertOne({username: "Noel", age: "unknown", prof: "webdeveloper"});
  //   console.log(result);

  //search user
  //   const result = await usersCollection.findOne({username: "Emil"});
  //   console.log(result);

  // Display all username and not display id add specified username inside first object to filter
  const result = await usersCollection.find({username: "Emil"}, {projection: {username: 1, _id: 0}}).toArray();
  console.log(result);

  //   select * from users
  //   const users = await usersCollection.find({}).toArray();
  //   console.log(users);
}

main();
