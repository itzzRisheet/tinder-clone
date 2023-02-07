import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js"; // imported collection from dbCard.js
import Cors from "cors"; // adding headers to every request and for security reasons
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// App config
const app = express();
const PORT = process.env.PORT || 4000;

// To set-up dotenv file -- We can't use __dirname in ES module so fielURLToPath used and path also at the end
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// dotenv.config is to set .env files specific path so that compiler know where is .env file
dotenv.config({ path: path.join(__dirname, "./.env") });

const connection_url = process.env.MONGO_URL;
console.log(process.env.MONGO_URL);
// Middleware
app.use(express.json()); // This method is used to parse the incoming requests with JSON payloads and is based upon the bodyparser.
app.use(Cors());

// Db config
mongoose.connect(
  connection_url,
  {
    useNewUrlParser: true,
    // useCreateIndex: true, // wasn't working...
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to the database...");
  }
);

// API Endpoints--------------

// get requests
app.get("/", (req, res) => {
  res.status(200).send("hello world dgfdgsfs");
});

//download data from database - for retrieving colleciotns from database
app.get("/tinder/card", (req, res) => {
  const dbCard = req.body;

  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// post requests
app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).send(data);
    }
  });
});

//---------------------------------

// Listeners
app.listen(PORT, () => {
  console.log(`listening on port localhost : ${PORT}`);
});
