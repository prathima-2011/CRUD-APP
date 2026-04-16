const express = require("express");
const mongoose = require("mongoose");
const app = express()

app.use(express.json());

mongoose.connect("mongodb+srv://*****/myapp")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

//Create Users
app.post("/users", async(req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send("User saved");
});

//Read Users
app.get("/users", async(req, res) => {
    const users = await User.find();
    res.json(users);
});

//Update Users
app.put("/users/:id", (req, res) => {
    let id = req.params.id;
    users[id] = req.body;
    res.send("User updated..!");
});

//Delete Users
/*
app.delete("/users/:id", (req, res) => {
    let id = req.params.id;
    users = users.filter((_, index) => index != id);
    res.send("Users Deleted..!")
});
*/
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
