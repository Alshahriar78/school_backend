const express = require("express");
const routes = require("./class.routes");


const router = express.Router();

router.use('/class',routes);

module.exports = router;