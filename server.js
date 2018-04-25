const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.json({'msg': 'Hello You All'})
});

app.listen(8080, () => {
    console.log('server is ready')
});