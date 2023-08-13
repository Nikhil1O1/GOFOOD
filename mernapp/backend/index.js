const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db")
mongoDB();
app.get('/', (req,res) => {
    res.send('hello there')
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})