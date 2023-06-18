const express = require("express");
const app = express();

app.get('/api/test', (req, res) => {
    res.json('test run successful')
})

app.listen(4000)