const insert = require('../model/queries/insert');

const addNewOrder = (req, res) => {
  insert.addNewOrder(order, (cb) => {
    res.send({ data: cb });
  });
};

module.exports = { addNewOrder };
