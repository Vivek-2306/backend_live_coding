const InvoiceHeader = require("../models/InvoiceHeader");

class InvoiceHeaderDao {
  async create(data) {
    return new Promise((resolve, reject) => {
      new InvoiceHeader(data)
        .save()
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  }
}

module.exports = InvoiceHeaderDao;
