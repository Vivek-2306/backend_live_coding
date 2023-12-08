const router = require("express").Router();
const InvoiceManager = require("../managers/InvoiceManager");
const { StatusCodes } = require("http-status-codes");

router.get("/invoice", async (req, res) => {
  try {
    const response = await new InvoiceManager(req).getAllList();
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, data: response, errorMessage: null });
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      data: null,
      errorMessage: "List Not Found",
    });
  }
});

router.get("/invoice/:id", async (req, res) => {
  try {
    const response = await new InvoiceManager(req).getListById();
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, data: response, errorMessage: null });
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      data: null,
      errorMessage: "List Not Found",
    });
  }
});

router.post("/invoice", async (req, res) => {
  try {
    const response = await new InvoiceManager(req).create();
    return res.status(StatusCodes.CREATED).json({
      status: StatusCodes.CREATED,
      data: response,
      errorMessage: null,
    });
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      data: null,
      errorMessage: "List Not Found",
    });
  }
});

router.put("/invoice/:id", async (req, res) => {
  try {
    const response = await new InvoiceManager(req).udpate();
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, data: response, errorMessage: null });
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      data: null,
      errorMessage: "List Not Found",
    });
  }
});

router.delete("/invoice/:id", async (req, res) => {
  try {
    const response = await new InvoiceManager(req).delete();
    return res
      .status(StatusCodes.OK)
      .json({ status: StatusCodes.OK, data: response, errorMessage: null });
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      data: null,
      errorMessage: "List Not Found",
    });
  }
});

module.exports = router;
