const express = require("express");
const router = express.Router();
const todoController = require("../controllers/TodoController");
const { validateId } = require("../middlewares/validateIdHandler");
const { protect } = require("../middlewares/authHandler");

router.get("", protect, todoController.getAll);
router.get("/:id", protect, validateId, todoController.getById);
router.post("", protect, todoController.create);
router.put("/:id", protect, validateId, todoController.update);
router.delete("/:id", protect, validateId, todoController.delete);

module.exports = router;
