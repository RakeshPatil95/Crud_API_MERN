const mysql =require('mysql');
function connect(){
    const connnection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'manager',
        database:'mern_db',
        port:3306,
    })
    connnection.connect();
    return connnection;
} 
module.exports={
    connect,
}