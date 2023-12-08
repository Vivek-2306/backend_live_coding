const InvoiceItems = require("../models/InvoiceItems");

class InvoiceItemsDao {
  async create(data) {
    return new Promise((resolve, reject) => {
      InvoiceItems.insertMany(data)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  }
}

module.exports = InvoiceItemsDao;
