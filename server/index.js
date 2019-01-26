require("dotenv").config();
const express = require("express");
const app = express();
const { json } = require("body-parser");
const massive = require("massive");
const { createProduct, getInventory } = require("../db/controller");

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);

    // dbInstance
    //   .create_table()
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => console.log(error));
  })
  .catch(error => console.log(error));

app.get("/api/inventory", getInventory);
app.post("/api/products", createProduct);
const port = 3001;

app.listen(port, () => console.log(`Listening on ${port}`));
