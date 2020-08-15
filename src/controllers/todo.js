const express = require("express");
const router = express.Router();
const { Todo } = require("../config/db");

router
  .route("/todos")
  .get(async (req, res) => {
    try {
      const todos = await Todo.findAll();
      return res.json(todos);
    } catch (e) {
      console.error(e);
      return res.status(500).send("Server Error");
    }
  })
  .post(async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(401).send("Invalid Params.");
    }

    try {
      const newTodo = { title, content };
      await Todo.create(newTodo);
      return res.status(201).send("OK");
    } catch (e) {
      console.error(e);
      return res.status(500).send("Server Error");
    }

    return res.status(201).send(`post todo title:${title} contnet:${content}`);
  });

router
  .route("/todos/:id")
  .get(async (req, res) => {
    try {
      const todo = await Todo.findByPk(req.params.id);

      if (!todo) {
        return res.status(404).send("Not Found.");
      }

      return res.json(todo);
    } catch (e) {
      console.error(e);
      return res.status(500).send("Server Error");
    }
  })
  .put(async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(401).send("Invalid Params.");
    }

    try {
      await Todo.update(
        {
          title,
          content,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      return res.send("OK.");
    } catch (e) {
      console.error(e);
      return res.status(500).send("Server Error.");
    }
  })
  .delete(async (req, res) => {
    try {
      await Todo.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.send("OK.");
    } catch (e) {
      console.error(e);
      return res.status(500).send("Server Error.");
    }

    return res.send(`delete todo ${req.params.id}`);
  });

module.exports = router;
