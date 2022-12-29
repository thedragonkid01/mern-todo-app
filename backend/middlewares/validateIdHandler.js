const mongoose = require("mongoose");

const validateId = (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400);
    throw new Error("Invalid Id");
  }

  next();
};

const validateIdHandler = {
  validateId,
};

module.exports = validateIdHandler;
