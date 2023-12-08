const mongoose = require("mongoose");

const schema = mongoose.Schema;

const invoiceHeader = new schema({
  id: { type: String, unique: true, required: true },
  date: { type: Date },
  invoiceNumber: { type: Number },
  customerName: { type: String },
  billingAddress: { type: String },
  shippingAddress: { type: String },
  gstIn: { type: String },
  totalAmount: { type: Schema.Types.Mixed },
});

const InvoiceHeader = mongoose.model("InvoiceHeader", invoiceHeader);

module.exports = InvoiceHeader;
