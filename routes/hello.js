var express = require('express');
var router = express.Router();
    
var sqlite3 = require('sqlite3'); // ★追加

// データベースオブジェクトの取得
// 自分で作ったデータベース名を引数に指定
var db = new sqlite3.Database('mydb.sqlite3');

// GETアクセスの処理
router.get('/', (req, res, next) => {
   // データベースのシリアライズ
   db.serialize(() => {
       // レコードをすべて取り出す
       db.all("select * from mydata", (err, rows) => {
          // データベースアクセス完了時の処理
          if (!err) {
              var data = {
                  title: 'データベースのデータを表示する',
                  content: rows // 取得したレコードデータ
              };
              res.render('hello', data);
          }
       });   
   });
});

module.exports = router;