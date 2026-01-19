const  express= require("express");
const userController = require('../controllers/user.controller');
const classController = require('../controllers/class.controller')

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", classController.getClass);
router.get("/:id",classController.getClassById);

module.exports = router;