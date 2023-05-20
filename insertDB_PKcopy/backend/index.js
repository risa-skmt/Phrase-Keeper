//requireでexpressモジュールを読み込む
const express = require('express');
//mysql2の読み込む
const mysql = require('mysql2');
//expressモジュールを実体化して、定数appに代入
const app = express();
//ポート番号を指定
const port = 3001;

app.use(express.json());


//mysqlと接続するための設定
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my00sql0first',
  database: 'phrase_keeper'
});


//POSTリクエストが/loginに対して送信された時の処理
app.post('/login', (req, res) => {
  const { name, email } = req.body;

  //ユーザ認証処理
  const sql = 'SELECT * FROM users WHERE name = ?';
  const values = [name];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error retrieving data from database:', error);
      res.status(500).json({ error: 'Error retrieving data from database' });
    } else {
      if (results.length > 0) {
        const user = results[0];
        if (user.email === email) {
          // ユーザー認証成功
          res.status(200).json({ message: '認証成功' });
        } else {
          // ユーザー認証失敗：emailが一致しない
          res.status(401).json({ error: '認証失敗' });
        }
      } else {
        // ユーザー認証失敗：nameが存在しない
        res.status(401).json({ error: '認証失敗' });
      }
    }
  });
});




//POSTリクエストが /api/insert エンドポイントに対して送信された場合の処理
// リクエストのボディからinputValueを取得しデータベースに追加
app.post('/api/insert', (req, res) => {
  const inputValue = req.body.inputValue;

  const sql = 'INSERT INTO phrases (phrase) VALUES (?)';
  const values = [inputValue];

  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error('Error inserting data into database:', error);
      res.status(500).json({ error: 'Error inserting data into database' });
    } else {
      console.log('Data inserted successfully');
      res.status(200).json({ message: 'Data inserted successfully' });
    }
  });
})

//GETリクエストが /api エンドポイントに対して送信された場合の処理
app.get('/api', (req, res) => {
  connection.query('SELECT * FROM phrases', (error, results) => {
    if (error) {
      console.error('Error retrieving data from database:', error);
      res.status(500).json({ error: 'Error retrieving data from database' });
    } else {
      res.status(200).json({ data: results });
    }
  });
});

//3000ポートでlisten
app.listen(port, () => {
  console.log(`listening on *:${port}`);
});

//npm run start-nodeでサーバー起動