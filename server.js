const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.json({'msg': 'Hello You All'})
});

const port = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log('server is ready')
});