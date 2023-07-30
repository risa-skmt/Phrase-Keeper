const express = require('express');
const mysql = require('mysql');

const app = express();


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'my00sql0first',
    database: 'phrase_keeper'
  });



connection.connect((err) => {
    if(err){
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});



//GETリクエストが /api/all_phrases エンドポイントに対して送信された場合の処理
app.get('/', (req, res) => {
    connection.query('SELECT * FROM phrases', (error, results) => {
      if (error) {
        console.error('Error retrieving data from database:', error);
        res.status(500).json({ error: 'Error retrieving data from database' });
      } else {
        //res.status(200).json({ data: results });
        res.render('hello.ejs', {data:results});
      }
    });
  });




// app.get('/', (req, res) => {
//     connection.query('SELECT * FROM users', (error, results) => {
//     console.log(results);
//             res.render('hello.ejs');
//         }
//     );
// });

app.listen(3000);