const InvoiceHeaderDao = require("../dao/InvoiceHeaderDao");
const InvoiceItems = require("../dao/InvoiceItemsDao");
const InvoiceBillSundry = require("../dao/InvoiceBillSundry");
const { v4: uuidv4 } = require("uuid");

const invoiceHeaderDao = new InvoiceHeaderDao();
const invoiceItemsDao = new InvoiceItems();
const invoiceBillSundryDao = new InvoiceBillSundry();

class InvoiceManager {
  body = null;
  params = null;
  query = null;

  constructor(_req) {
    this.body = _req.body;
    this.params = _req.params;
    this.query = _req.query;
  }

  async getAllList() {}

  async getListById() {}

  async create() {
    const uuid = uuidv4();
    let totalItemAmounts = 0;
    let totalBillAmounts = 0;
    const { invoiceHeader, invoiceItems, invoiceBillSundry } = this.body;
    const invoiceHeaderResponse = await invoiceHeaderDao.create(invoiceHeader);

    for (let item of invoiceItems) {
      const amount = invoiceItems?.quantity * invoiceItems?.price;
      item["amount"] = amount;
      totalItemAmounts += amount;
    }
    const invoiceItemsResponse = await invoiceItemsDao.create(invoiceItems);

    for (let bill of invoiceBillSundry) {
      totalBillAmounts += invoiceBillSundry?.amount;
    }

    const invoiceBillSundryResponse = await invoiceBillSundryDao.create(
      invoiceBillSundry
    );
  }

  async udpate() {}

  async delete() {}
}

module.exports = InvoiceManager;
