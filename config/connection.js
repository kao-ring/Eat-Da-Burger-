// Set up MySQL connection.
var mysql = require("mysql");
//jgfkxif863dgz3zx:r2l5c26ya0u04nck@rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/xdav8squ7355gktj

mysql: mysql: var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "trilogy!",
    database: "burgers_db",
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
