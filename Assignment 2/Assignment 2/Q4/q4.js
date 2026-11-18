const express = require('express');

const app = express();

app.use(express.json());

let tasks = [
    { id: 1, task: "Complete homework", completed: false },
    { id: 2, task: "Study Node.js", completed: false }
];

// GET - Display all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST - Add a new task
app.post('/tasks', (req, res) => {
    const newTask = {
        id: Date.now(),
        task: req.body.task,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// PUT - Mark task as completed
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (task) {
        task.completed = true;
        res.json(task);
    } else {
        res.status(404).send("Task not found");
    }
});

// DELETE - Remove a task
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);

    res.send("Task deleted successfully");
});

// Start server
app.listen(3000, () => {
    console.log("To-Do Server running on port 3000");
});