var mysql=require('mysql');

var connection= mysql.createConnection({
    host:'localhost',
    database:'reactdb',
    user:'root',
    password:'Passw0rd#123'
});

module.exports=connection;