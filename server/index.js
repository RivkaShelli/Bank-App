const express = require('express');
const app = express();
const PORT = 5555;

app.use(express.json());

const bankCtrl = require('./controllers/bank.ctrl');

app.use('/api/bank', bankCtrl);

app.use(express.static('./public'))

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`server up ${PORT}`));
