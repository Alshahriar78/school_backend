const  express= require("express");
const classController= require("../controllers/class.controller.js");

const router = express.Router();

router.post("/", classController.createClass);
router.get("/", classController.getClass);

module.exports = router;
