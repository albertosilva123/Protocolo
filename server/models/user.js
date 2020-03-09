'use strict';

const mysql = require('mysql');
const config = require('../config/mysql');

const connection = mysql.createConnection(config.configDB);

const SELECT_ALUMNO = 'SELECT * FROM alumno';
const _login = (boleta, password, done) => {
    console.log("HOLA",boleta,password);
    connection.query("SELECT * FROM `alumno` WHERE `boleta` = '" + boleta + "'", (err, rows) => {
        if (err)
            return done(err);
        if (!rows.length) {
            return done({loginMessage: 'Invalid email or password.'});
        }
        if (!( rows[0].password == password))
            return done({loginMessage: 'Invalid email or password.'});

        return done(null, rows[0]);

    });
}

const _getUserById = (id, done) => {
    connection.query("SELECT * FROM `users` WHERE `id` = '" + id + "'", (err, rows) => {
        if (err)
            return done(err);
        if (!rows.length) {
            return done({loginMessage: 'User not found.'});
        }
        return done(null, rows[0]);

    });
}

const _insertSome = (app)=>{
    app.get('/database/add',(req,res) =>{
        const {boleta,nombre,email,usuario,pass} = req.query;
        const INSERT_alumno = `INSERT INTO alumno values('${boleta}','${nombre}','${email}','${usuario}','${pass}','0');`;
        // res.send("Añadiendo a la base...");
        connection.query(INSERT_alumno,(err,results) =>{
            if(err){
                return res.send(err);
            }
            else {
                return res.send('Se añadio un registro');
            }
        });
        console.log(boleta,nombre);
    });
}
const _selectAlumnos = (app)=>{
    app.get('/database',(req,res) =>{
        connection.query(SELECT_ALUMNO,(err,results) =>{
          if(err){
            return res.send(err);
          }
          else{
            return res.json({
              data:results
            })
          }
        });
      });
}

module.exports.login = _login;
module.exports.getUserById = _getUserById;
module.exports.selectAlumnos = _selectAlumnos;
module.exports.insertSome = _insertSome;