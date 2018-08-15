const connect = require('../db_connect.js');

exports.addNewOrder = (order, cb) => {
  const sql = {
    text: 'insert into orders (item_id, user_id, quantity) values($1, $2, $3);',
    values: [order.item_id, order.user_id, order.quantity],
  };

  connect.query(sql, (err, result) => {
    if (err) cb(err);
    cb(null, result.rows);
  });
};
