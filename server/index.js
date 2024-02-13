const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello ");
});

const Port = process.env.PORT || 3001;
app.listen(Port, () => {
  console.log(`app is listining on post no ${Port}`);
});
