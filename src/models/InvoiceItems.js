const mongoose = require("mongoose");

const schema = mongoose.Schema;

const invoiceItems = new schema({
  id: { type: String, unique: true, required: true },
  itemName: { type: String },
  quantity: { type: schema.Types.Mixed },
  price: { type: schema.Types.Mixed },
  amount: { type: schema.Types.Mixed },
});

const InvoiceItems = mongoose.model("InvoiceItems", invoiceItems);

module.exports = InvoiceItems;
