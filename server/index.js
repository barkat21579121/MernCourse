const express = require("express");
const router = require("./Router/index");
const DbConnection = require("./Utils/Db");
const app = express();

app.use(express.json());
app.use("/api/auth", router);

const Port = process.env.PORT || 3001;

DbConnection().then(() => {
  app.listen(Port, () => {
    console.log(`app is listining on post no ${Port}`);
  });
});
