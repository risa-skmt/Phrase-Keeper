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