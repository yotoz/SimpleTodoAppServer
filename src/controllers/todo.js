const express = require("express");
const router = express.Router();

router
  .route("/todos")
  .get((req, res) => {
    return res.send("get todos");
  })
  .post((req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(401).send("Invalid Params.");
    }

    return res.status(201).send(`post todo title:${title} contnet:${content}`);
  });

router
  .route("/todos/:id")
  .get((req, res) => {
    return res.send(`get todo ${req.params.id}`);
  })
  .put((req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(401).send("Invalid Params.");
    }

    return res.send(`put todo title:${title} contnet:${content}`);
  })
  .delete((req, res) => {
    return res.send(`delete todo ${req.params.id}`);
  });

module.exports = router;
