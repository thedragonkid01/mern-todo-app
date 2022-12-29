const asyncHandler = require("express-async-handler");
const Todo = require("../models/Todo");

class TodoController {
  // @URI:      api/todos
  // @Method:   GET
  getAll = asyncHandler(async (req, res) => {
    const todos = await Todo.find({});
    res.json(todos);
  });

  // @URI:      api/todos/:id
  // @Method:   GET
  getById = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      res.status(400);
      throw new Error("Unable to find data");
    }

    res.json(todo);
  });

  // @URI:      api/todos
  // @Method:   POST
  create = asyncHandler(async (req, res) => {
    // Validation
    if (!req.body.title) {
      res.status(400);
      throw new Error("Please input title");
    }

    // Create
    const todo = await Todo.create({
      ...req.body,
      status: "new",
    });
    res.json(todo);
  });

  // @URI:      api/todos/:id
  // @Method:   PUT
  update = asyncHandler(async (req, res) => {
    // Validation
    if (!req.body.title) {
      res.status(400);
      throw new Error("Please input title");
    }

    // Update
    const todoUpdated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!todoUpdated) {
      res.status(400);
      throw new Error("Bad request");
    }

    res.json(todoUpdated);
  });

  // @URI:      api/todos/:id
  // @Method:   DELETE
  delete = asyncHandler(async (req, res) => {
    const todoDeleted = await Todo.findByIdAndDelete(req.params.id);

    if (!todoDeleted) {
      res.status(400);
      throw new Error("Bad request");
    }

    res.json({ _id: req.params.id });
  });
}

module.exports = new TodoController();
