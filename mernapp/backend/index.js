const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db")
const cors = require('cors');

mongoDB();
app.get('/', (req,res) => {
    res.send('hello there')
})
app.use(cors());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Origin",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})