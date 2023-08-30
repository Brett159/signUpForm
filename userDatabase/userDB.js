import { signUpInputs } from '../signUpForm';
const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to a database
const db = new sqlite3.Database('./user.db',sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message)
});
/* create a table, id integer primary key allows the table to incrimete auto
 sql = `CREATE TABLE USERS(id INTEGER PRIMARY KEY,first_name,last_name,email,password,time)`;
 db.run(sql)
  dropping a table
  db.run(`DROP TABLE USERS`)*/

//INSTERT DATA INTO TABLE 

sql = `INSERT INTO USERS(first_name,last_name,email,password,time) VALUES(${signUpInputs})`;
db.run(sql, signUpInputs,
(err)=>{
    if (err) return console.error(err.message)})  

   /* //update and delete
    sql =  `UPDATE USERS SET first_name = ? WHERE id =?`;
    db.run(sql,['Brett',1],(err)=>{
    if (err) return console.error(err.message)})


    sql =  `DELETE FORM USERS WHERE id =?`;
    db.run(sql,[1],(err)=>{
    if (err) return console.error(err.message)})*/

    // query the data
sql = `SELECT * FROM USERS`;
db.all(sql,[],(err,rows)=>{
    if(err) return console.error(err.message);
    rows.forEach((row)=>{
        console.log(row)
    })
})