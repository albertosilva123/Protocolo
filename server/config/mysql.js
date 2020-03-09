/**
 * Created by adrian on 28/08/2018.
 */
module.exports.configDB = {
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'protocolo'
}



// ?curp=AAAAA&nombre=Alberto&edad=21&dir=Conodida&tel=111111
// IF QUERY TROWS ERROS MAKE THIS QUERY ON MYSQL 
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
// AND  
// flush privileges;