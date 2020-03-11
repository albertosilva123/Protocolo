const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');
const https = require('https')
const app = express();
const port = 4000;
const SELECT_QUERY = 'SELECT * FROM alumno';
var bodyParser =require("body-parser");
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'protocolo'
  });

app.use(cors());
app.get('/',(req,res) =>{
    res.send('GO to database to see it')
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ?curp=AAAAA&nombre=Alberto&edad=21&dir=Conodida&tel=111111
// IF QUERY TROWS ERROS MAKE THIS QUERY ON MYSQL 
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
// AND  
// flush privileges;
app.post('/add',function(req,res){
  console.log(req.body)
  var nombre=req.body.nombre+" "+req.body.apellidoP+" "+req.body.apellidoM;
  var usuario=req.body.usuario;
  var boleta=req.body.boleta;
  var password=req.body.pass;
  var correo=req.body.correo;
  console.log("User name = "+nombre+", password is "+password);
  const search= "SELECT * FROM `alumno` WHERE `boleta` = '" + boleta + "'";
  let user;
  pool.query(search,(err,results)=>{
      if(err){
          return res.send(err);
      }
      else {
          console.log("query",results.length)
          if(!results.length){
            const INSERT_alumno = `INSERT INTO alumno values('${boleta}','${nombre}','${correo}','${usuario}','${password}','-1');`;
            pool.query(INSERT_alumno,(err,results) =>{
                if(err){
                    console.log(err);
                }
                else {
                    console.log('Se añadio un registro');
                }
            });
          }
          else{
            if(results[0].numTT!='-1'){
              const update_alumno = `UPDATE alumno\
              SET nombre = '${nombre}', email = '${correo}', usuario ='${usuario}', password='${password}'\
              WHERE boleta='${boleta}';`
            }
          }
          return res.json({
            data:results
          })
          user:results
          // res.send("EL usuario ya existe");
          // console.log(results);  
      }
  })

});

app.post('/addprotocolo',function(req,res){
  
}); 

app.get('/database',(req,res) =>{
    pool.query(SELECT_QUERY,(err,results) =>{
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
  app.get('/database/search',(req,res)=>{

      const {boleta} = req.query;
      const search= "SELECT * FROM `alumno` WHERE `boleta` = '" + boleta + "'";
      pool.query(search,(err,results)=>{
          if(err){
              return res.send(err);
          }
          else {
              return res.json({
                  data:results
              })
          }
      })

  });

  app.get('/database/add',(req,res) =>{
      const {boleta,nombre,email,usuario,pass} = req.query;
      const INSERT_alumno = `INSERT INTO alumno values('${boleta}','${nombre}','${email}','${usuario}','${pass}','0');`;
      // res.send("Añadiendo a la base...");
      pool.query(INSERT_alumno,(err,results) =>{
          if(err){
              return res.send(err);
          }
          else {
              return res.send('Se añadio un registro');
          }
      });
      console.log(boleta,nombre);
  });
  app.get('/database',(req,res) =>{
      pool.query(SELECT_ALUMNO,(err,results) =>{
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
  app.get('/database/getprotocolo',(req,res) =>{
    const {boleta} = req.query;
    const get_protocolo = `select *from protocolo,alumno,evaluacion,profesor\
    where protocolo.numTT = alumno.numTT\   
    AND protocolo.numTT = evaluacion.numTT\
    AND evaluacion.sinodal = profesor.numEmp\
    AND alumno.boleta = '${boleta}'`
    pool.query(get_protocolo,(err,results) =>{
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
    app.get('/database/getprotocoloToMaster',(req,res) =>{ 
      const {boleta} = req.query;
      const get_protocolo = `select * from protocolo,alumno,evaluacion,profesor
      where protocolo.numTT = alumno.numTT
      AND protocolo.numTT = evaluacion.numTT
      AND evaluacion.sinodal = profesor.numEmp
      AND profesor.numEmp = '${boleta}'
      group by evaluacion.numTT `
      pool.query(get_protocolo,(err,results) =>{
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
const httpsOptions = {
  key: fs.readFileSync('./security/cert.key'),
  cert: fs.readFileSync('./security/cert.pem')
}
const server = https.createServer(httpsOptions, app)
  .listen(port, () => {
      console.log('server running at ' + port)
  })

