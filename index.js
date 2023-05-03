const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const chefdata = require("./chefdata/data.json");
const chefrecipes = require("./chefdata/chefrecipes.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("tasty cookes compass is running");
});

app.get("/chefdata", (req, res) => {
  res.send(chefdata);
});

app.get("/chefrecipes/", (req, res) => {
  res.send(chefrecipes);
});

app.get("/chefdata/:id", (req, res) => {
  const id = req.params.id;
  const selectId = chefdata.find((recipes) => recipes.id === id);
  res.send(selectId);
});

app.listen(port, () => {
  console.log(`tasty cookes compass is running on port: ${port}`);
});
