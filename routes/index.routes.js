const express = require("express");
const classRoutes = require("./class.routes");
const userRoutes = require('./user.routes')


const router = express.Router();

router.use('/class',classRoutes);
router.use('/user',userRoutes)

module.exports = router;