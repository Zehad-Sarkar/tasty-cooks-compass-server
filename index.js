const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const categories = require("./chefdata/list.json");
const chefrecipes = require("./chefdata/chefrecipes.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("tasty cookes compass is running");
});

app.get("/list", (req, res) => {
  res.send(categories);
})
app.get("/list/:id", (req, res) => {
   const id = req.params.id;
   const selectId = categories.filter((c) => c.id === id);
   res.send(selectId);
})

app.get("/chefrecipes", (req, res) => {
  res.send(chefrecipes);
});

app.get("/chefrecipes/:id", (req, res) => {
  const id = req.params.id;

  console.log(id);
  const selectId = chefrecipes.find((recipes) => recipes.id === id);
  res.send(selectId);
});

app.listen(port, () => {
  console.log(`tasty cookes compass is running on port: ${port}`);
});
