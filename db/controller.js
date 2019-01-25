module.exports = {
  create: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    const { img, name, price } = req.body;

    dbInstance
      .make_post([img, name, price])
      .then(response => {
        res.status(200);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  getInventory: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getInventory()
      .then(inventory => {
        res.status(200).json(inventory);
      })
      .catch(err => {
        res.status(500).send("Sorry Wrong Path Mate");
        console.log(err);
      });
  }
};
