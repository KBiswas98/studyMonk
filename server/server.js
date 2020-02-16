const express = require('express')

const PORT = 5000;

const app = express();

app.get('/', (req, res,next) => {
    res.send('Woo it works.')
})

app.listen(PORT, ()=> {
    console.log(`Express server start at: ${PORT}`)
})