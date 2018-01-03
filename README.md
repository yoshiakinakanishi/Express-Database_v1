# Express-Database_v1

# SQLiteを用意する

・http://localhost:3000/helloにアクセスして、データベースが表示されていればOK

![default](https://user-images.githubusercontent.com/28942665/34532614-1a741046-f0fa-11e7-8bdd-22f9dba4b960.JPG)

***

# SQLiteを用意する
https://www.sqlite.org/download.html
Precompiled Binaries for WindowsをDLする

# DB Brouwser for SQliteを用意する
http://sqlitebrowser.org/

# データベースを設計する

・DB Browser画面を起動する

・New Databaseをクリックする

・ファイル名を入力する　mydb.sqlite3

・上段の空欄にテーブル名のタイトルを入力する　mydata

・Add filesのタブをクリック

・フィールドを下記のように作成する

![default](https://user-images.githubusercontent.com/28942665/34533039-c345684a-f0fb-11e7-8bc4-f82b4d0d06d4.JPG)

・テーブルを保存する　OK->Write Change

# テーブルにデータを追加する

すでにid/name/mail/ageフィールドを作ったので、適当な任意のデータを保存する

・Browse Dataタブをクリック

・New Recordボタンをクリック

・任意のデータを4つほど作る

・Write　Changesタブをクリックして、データを保存して、DB Browserを終了
