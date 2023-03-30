const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const {SECRET_URL} = process.env;

const db = {users: undefined};

MongoClient.connect(SECRET_URL).then((client) => {
  db.users = client.db("nackademin").collection("users");
  console.log("connected to database");
});

exports.db = db;
