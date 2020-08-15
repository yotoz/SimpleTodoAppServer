const db = {
  MYSQL_ID: process.env.MYSQL_ID || "root",
  MYSQL_PASSWD: process.env.MYSQL_PASSWD || "123123",
  MYSQL_HOST: process.env.MYSQL_HOST || "localhost",
  MYSQL_PORT: process.env.MYSQL_PORT || 3306,
  MYSQL_DB: process.env.MYSQL_DB || "TODO",

  getMysqlUri: function () {
    const { MYSQL_ID, MYSQL_PASSWD, MYSQL_HOST, MYSQL_PORT, MYSQL_DB } = this;

    return `mysql:${MYSQL_ID}:${MYSQL_PASSWD}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}`;
  },
};

db.getMysqlUri = db.getMysqlUri.bind(db);

module.exports = db;
