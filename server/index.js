require("dotenv").config();
const express = require("express");
const app = express();
const { json } = require("body-parser");
const massive = require("massive");
const { create, getInventory } = require("../db/controller");

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

app.post("/api/products", create);
app.get("/api/inventory", getInventory);
const port = 3001;

app.listen(port, () => console.log(`Listening on ${port}`));
