const express = require('express');
const router = express.Router();
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'test-4'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("SQL Connected!");
});

router.get('/:accountNumber', function (req, res) {
    const sql = `SELECT * FROM accountoperations WHERE accountNumber = ${req.params.accountNumber}`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

router.post('/', function (req, res) {
    console.log(req.body)
    const sql = `INSERT INTO accountoperations(accountNumber, type, sum, op_date, interest, payments) VALUES (?,?,?,?,?,?)`;
    con.query(sql, [req.body.accountNumber, req.body.type, req.body.sum, req.body.op_date, req.body.interest, req.body.payments], function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;