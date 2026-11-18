const express = require("express");

const app = express();

app.use(express.json());

let tasks = [
    {
        id: 1,
        task: "Study Node.js",
        completed: false
    },
    {
        id: 2,
        task: "Complete Assignment",
        completed: false
    }
];

// GET - Show all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// POST - Add a task
app.post("/tasks", (req, res) => {

    const newTask = {
        id: tasks.length + 1,
        task: req.body.task,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// PUT - Mark task as completed
app.put("/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.completed = true;

    res.json(task);
});

// DELETE - Delete a task
app.delete("/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: "Task deleted successfully"
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});