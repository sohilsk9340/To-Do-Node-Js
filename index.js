require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()


const PORT = process.env.PORT || 3000;
const conn = process.env.CONN;



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



mongoose.connect(conn)
        .then(() => console.log('connected'))
        .catch(() => console.log('Error'))

        const demoSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            email: {
                type: String
            },
            phone: {
                type: Number
            }
        })

const user = mongoose.model('mymodel', demoSchema, 'demodata')


app.post("/login", (req, res) => {
    const body = req.body;
    const username = body.username;
    const pass = body.pass;

    if(username === "sohil" && pass === 123)
        res.json({
            data: "success",
        })
    else 
        res.end("Incorrect creds")
})

app.post('/register', async (req, res) => {
    const body = req.body;

    const name = body.name;
    const email = body.email;
    const phone = body.phone;

    const insertedUser = await user.create({name: name, email: email, phone: phone})

    res.json({msg: "User inserted successfully", data: insertedUser})
})



app.listen(PORT, () => console.log("Application started on PORT " + PORT))