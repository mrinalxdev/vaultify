const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())
app.get('/api/test', (req, res) => {
    res.json('test run successful')
})

app.get('/api/transaction', (req, res)=> {
    const{ name, description, datetime} = res.body
    
    res.json(req.body)
})
app.listen(4040)

//smjz5j5TgQx8NAzB