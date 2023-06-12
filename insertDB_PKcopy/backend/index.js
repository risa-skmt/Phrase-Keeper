//requireでexpressモジュールを読み込む
const express = require('express');
//mysql2の読み込む
const mysql = require('mysql2');
//expressモジュールを実体化して、定数appに代入
const app = express();
//ポート番号を指定
const port = 3001;

const cors = require('cors');

app.use(express.json());
app.use(cors());


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
  const sql = 'SELECT * FROM users WHERE name = ?'; //?はプレースホルダー（DELETE FROM user--など、DBに対して危険な入力を避けるため）
  const values = [name];

  connection.query(sql, values, (error, results) => {      //resultsはDBの行をオブジェクトとして持つ配列　　例）[{user_id:1, name: "ri", email:"hi@gmail.com"} {user_id:2, name: "ri", email:"hi@gmail.com"}]
    if (error) {
      console.error('Error retrieving data from database:', error);
      res.status(500).json({ error: 'Error retrieving data from database' });
    } else {
      if (results.length > 0) {     //resultsのlengthが1以上の時は検索結果が存在する。
        const user = results[0];    //そのうちの最初の検索結果をuserとして取得する。
        if (user.email === email) {  //userのemailがリクエストのemailと一致するか
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


//POSTリクエストが/signupに対して送信された時の処理
app.post('/signup', (req, res) => {
  const sql = "INSERT INTO users ('name', 'email_1', 'email_2') VALUES (?)";
  const values = [
    req.body.name,
    req.body.email_1,
    req.body.email_2
  ]
  connection.query(sql, [values], (error, data) => {
    if(error){
      return res.status(500).json({ error: 'Error inserting data into database' })
    }
    return res.json(data);
  })
})




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

//GETリクエストが /api/all_phrases エンドポイントに対して送信された場合の処理
app.get('/api/all_phrases', (req, res) => {
  connection.query('SELECT * FROM phrases', (error, results) => {
    if (error) {
      console.error('Error retrieving data from database:', error);
      res.status(500).json({ error: 'Error retrieving data from database' });
    } else {
      res.status(200).json({ data: results });
    }
  });
});

//GETリクエストが /api/users エンドポイントに対して送信された場合の処理
app.get('/api/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
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