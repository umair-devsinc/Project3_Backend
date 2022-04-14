const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const address = process.env.ADDRESS;

const corsOptions = {
  origin: address,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const db = require("./config/database");
db.authenticate()
  .then(() => console.log("Database Connected...."))
  .catch((er) => console.log("error" + er));

app.use(express.json());

app.use(require("./routes/index"));

app.listen(port);
