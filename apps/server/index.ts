import express, { Express } from 'express';
import mysql from 'mysql2';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } from './src/config/db';

const app: Express = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8000, () => {
  console.log('**----------------------------------**');
  console.log('====      Server is On...!!!      ====');
  console.log('**----------------------------------**');
});

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
