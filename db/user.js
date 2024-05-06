const { default: mongoose } = require("mongoose");
const todoSchema = require("./todoSchema");
const userSchema = require("./userSchema");

const DB_NAME = process.env.DB_NAME || "todo";
const URI = process.env.MONGO_URI || "mongodb+srv://todo:todo@cluster0.elwmgmk.mongodb.net";
const MONGO_URI = `${URI}/${DB_NAME}`;

mongoose.connect(MONGO_URI).then(() => console.log("Connected")).catch((err) => console.log(err))

const users = mongoose.model('user', userSchema, 'users');
const todos = mongoose.model('todo', todoSchema, 'todos');

module.exports = {users, todos};