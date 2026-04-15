const express = require("express");
const app = express()

app.use(express.json());


let users = [];

//Create Users
app.post("/users", (req, res) => {
    let user = req.body;
    users.push(user);
    res.send("User added");
});

//Read Users
app.get("/users", (req, res) => {
    res.json(users);
});

//Update Users
app.put("/users/:id", (req, res) => {
    let id = req.params.id;
    users[id] = req.body;
    res.send("User updated..!");
});

//Delete Users
app.delete("/users/:id", (req, res) => {
    let id = req.params.id;
    users = users.filter((_, index) => index != id);
    res.send("Users Deleted..!")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});