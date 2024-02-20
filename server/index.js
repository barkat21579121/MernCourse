const express = require("express");
const getAllUser = require("./Router/getAllUserData");
const getAllContacs = require("./Router/getAllContacts");
const router = require("./Router/index");
const DbConnection = require("./Utils/Db");
const app = express();
const dotEnv = require("dotenv");
const errorHandler = require("./middleware-Validator/ErrorHandler");
const ContactRoute = require("./Router/contactRoute");
var cors = require("cors");
dotEnv.config();
app.use(cors());
app.use(express.json());
app.use("/api/auth", router);
app.use("/api/form", ContactRoute);
app.use("/api/admin", getAllUser);
app.use("/api/admin", getAllContacs);

app.use(errorHandler);
const Port = 3001;

DbConnection(process.env.DB_URL).then(() => {
  app.listen(Port, () => {
    console.log(`app is listining on post no ${Port}`);
  });
});
