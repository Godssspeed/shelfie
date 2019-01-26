module.exports = {
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
  },

  createProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, price, img } = req.body;
    dbInstance
      .create_product([name, price, img])
      .then(product => {
        res.status(200).json(product);
      })
      .catch(err => {
        res.status(500).send("Sorry Wrong Function Mate");
        console.log(err);
      });
  }
};
