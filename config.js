
// set database based on environment
var env = process.env.NODE_ENV;
var database;

switch (env) {
  case 'test':
    database = {
      debug: true,
      client: 'sqlite3',
      connection: {
        filename: __dirname + '/../../db.test.sqlite',
      },
    };
    break;
  case 'production':
    throw new Error("Not Implemented");
    //break;
  default:
    database = {
      client: "sqlite3",
      connection: {
        filename: __dirname + "/../../db.sqlite",
      },
    };
    break;
}

// export config
module.exports = {
  directory: "./migrations",
  tableName: "db_migrations",
  database: database,
};
