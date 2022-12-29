const asyncHandler = require("express-async-handler");
const Todo = require("../models/Todo");

class TodoController {
  // @URI:      api/todos
  // @Method:   GET
  getAll = asyncHandler(async (req, res) => {
    const todos = await Todo.find({ user: req.user._id });
    res.json(todos);
  });

  // @URI:      api/todos/:id
  // @Method:   GET
  getById = asyncHandler(async (req, res) => {
    const todo = await Todo.findOne({ id: req.params.id, user: req.user._id });

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
      user: req.user._id,
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
    const todoUpdated = await Todo.findOneAndUpdate(
      { id: req.params.id, user: req.user._id },
      req.body,
      {
        new: true,
      }
    );

    if (!todoUpdated) {
      res.status(400);
      throw new Error("Bad request");
    }

    res.json(todoUpdated);
  });

  // @URI:      api/todos/:id
  // @Method:   DELETE
  delete = asyncHandler(async (req, res) => {
    const todoDeleted = await Todo.findOneAndDelete({
      id: req.params.id,
      user: req.user._id,
    });

    if (!todoDeleted) {
      res.status(400);
      throw new Error("Bad request");
    }

    res.json({ _id: req.params.id });
  });
}

module.exports = new TodoController();
