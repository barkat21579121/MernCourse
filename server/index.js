const express = require("express");
const router = require("./Router/index");
const DbConnection = require("./Utils/Db");
const app = express();
const dotEnv = require("dotenv");
const errorHandler = require("./middleware-Validator/ErrorHandler");
const ContactRoute = require("./Router/contactRoute");
dotEnv.config();

app.use(express.json());
app.use("/api/auth", router);
app.use("/api/form", ContactRoute);

app.use(errorHandler);
const Port = 3001;

DbConnection(process.env.DB_URL).then(() => {
  app.listen(Port, () => {
    console.log(`app is listining on post no ${Port}`);
  });
});
