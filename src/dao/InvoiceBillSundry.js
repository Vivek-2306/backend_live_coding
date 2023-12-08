const InvoiceBillSundry = require("../models/InvoiceBillSundry");

class InvoiceBillSundryDao {
  async create(data) {
    return new Promise((resolve, reject) => {
      InvoiceBillSundry.insertMany(data)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  }
}

module.exports = InvoiceBillSundryDao;
