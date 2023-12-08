const mongoose = require("mongoose");

const schema = mongoose.Schema;

const invoiceBillSundry = new schema({
  id: { type: String, unique: true, required: true },
  billSundryName: { type: String },
  amount: { type: schema.Types.Mixed },
});

const InvoiceBillSundry = mongoose.model(
  "InvoiceBillSundry",
  invoiceBillSundry
);

module.exports = InvoiceBillSundry;
