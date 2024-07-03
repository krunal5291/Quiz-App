const express = require("express")
const connectdb = require('./db');
const Quizdata = require('./quiz');

const app = express();
app.use(express.json());
app.use(express.urlencoded())

// Middleware to allow CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get("/", async (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get("/quizdata", async (req, res) => {
    let quiz = await Quizdata.find();
    res.send(quiz)
})

app.post("/add", async (req, res) => {

    console.log(req.body);
    let Quiz = await Quizdata.create(req.body);
    res.send(Quiz)
});

app.delete("/:id", async (req, res) => {
    let { id } = req.params

    await Quizdata.findByIdAndDelete(id)
    res.send("delete")
})

app.listen(8090, () => {
    console.log("server in runing up to 8090 ");
    connectdb()
});