const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", (req, res) => {
  const filterUser = req.query.name || null;
  controller
    .getUser(req.body.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((e) => response.error(req, res, "Internal error", 500, e));
});

router.post("/", (req, res) => {
  controller
    .addUser(req.body.name)
    .then((data) => response.success(req, res, data, 201))
    .catch((e) => response.error(req, res, "Internal Error", 500, e));
});

router;

module.exports = router;
