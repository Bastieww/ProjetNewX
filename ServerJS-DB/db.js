const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'database',
    port: 3306,
    user: 'mariadb',
    password: 'mariadb',
    database: 'projetnewx'
});

module.exports = pool;
