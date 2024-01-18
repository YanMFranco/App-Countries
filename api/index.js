require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {
  DB_P
} = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(DB_P, () => {
    console.log(`%s listening at ${DB_P}`); // eslint-disable-line no-console
  });
});
