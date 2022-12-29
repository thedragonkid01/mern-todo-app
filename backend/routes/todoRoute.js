const express = require("express");
const router = express.Router();
const todoController = require("../controllers/TodoController");
const { validateId } = require("../middlewares/validateIdHandler");

router.get("", todoController.getAll);
router.get("/:id", validateId, todoController.getById);
router.post("", todoController.create);
router.put("/:id", validateId, todoController.update);
router.delete("/:id", validateId, todoController.delete);

module.exports = router;
