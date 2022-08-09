const express = require("express");
const app = express();
const port = 8000;
    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allUsers = [
    {
        "name": "user1",
        "email": "user1@email.com"
    },
    {
        "name": "user2",
        "email": "user2@email.com"
    },        {
        "name": "user3",
        "email": "user3@email.com"
    }
]

// req es la abreviatura para request
// res es la abreviatura para response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users", (req, res) => {
    res.json({ users: allUsers});
});

app.post("/api/users/new", (req, res) => {
    // Object.keys(req.body).map((key) => {
    //     console.log(`${key}: ${req.body[key]}`)
    // })
    const newUser = {
        "name": req.body.name,
        "email": req.body.email
    }
    allUsers.push(newUser)
    return res.json({msg: "ok"})
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );