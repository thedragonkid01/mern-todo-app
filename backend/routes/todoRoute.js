const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Route -> Get" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "Route -> Get", id: req.params.id });
});

router.post("/", (req, res) => {
  res.json({ message: "Route -> Post" });
});

router.put("/", (req, res) => {
  res.json({ message: "Route -> Put" });
});

router.delete("/", (req, res) => {
  res.json({ message: "Route -> Delete" });
});

module.exports = router;
