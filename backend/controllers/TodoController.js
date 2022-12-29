class TodoController {
  // @URI:      api/todos
  // @Method:   GET
  getAll = (req, res) => {
    res.json({ message: "Controller -> Get All" });
  };

  // @URI:      api/todos/:id
  // @Method:   GET
  getById = (req, res) => {
    res.json({ message: "Controller -> Get By Id", id: req.params.id });
  };

  // @URI:      api/todos
  // @Method:   POST
  create = (req, res) => {
    res.json({ message: "Controller -> Post" });
  };

  // @URI:      api/todos/:id
  // @Method:   PUT
  update = (req, res) => {
    res.json({ message: "Controller -> Put" });
  };

  // @URI:      api/todos/:id
  // @Method:   DELETE
  delete = (req, res) => {
    res.json({ message: "Controller -> Delete" });
  };
}

module.exports = new TodoController();
