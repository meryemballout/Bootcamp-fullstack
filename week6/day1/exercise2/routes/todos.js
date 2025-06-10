// routes/todos.js
const express = require('express');
const router = express.Router();

// Sample in-memory database
let todos = [];
let idCounter = 1;

// Get all to-do items
router.get('/', (req, res) => {
  res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const { title } = req.body;
  const newTodo = { id: idCounter++, title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: 'To-do not found' });
  }

  todo.title = title;
  res.json(todo);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'To-do not found' });
  }

  todos.splice(index, 1);
  res.json({ message: 'To-do deleted successfully' });
});

module.exports = router;
