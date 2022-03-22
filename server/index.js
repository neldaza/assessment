require('dotenv/config');
const express = require('express');
const pg = require('pg');
const jsonMiddleware = express.json();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/third-question-database',
  ssl: {
    rejectUnauthorized: false
  }
});
const app = express();
const staticMiddleware = require('./static-middleware');

app.use(staticMiddleware);
app.use(jsonMiddleware);

app.post('/api/auth/input', (req, res, next) => {
  const { choiceA, choiceB, choiceC } = req.body;
  const sql = `
    insert into "classes" ("class")
    values ($1), ($2), ($3)
    returning *;
    `;
  const post = [choiceA, choiceB, choiceC];
  db.query(sql, post)
    .then(result => {
      res.status(201);
      const emptyObject = {};
      emptyObject.message = 'Your choices have been posted to the database!';
      res.send(emptyObject);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
