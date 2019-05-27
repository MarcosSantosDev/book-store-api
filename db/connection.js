const { connect } = require('mongoose');
const config = require('config');

const _connection = () => {
  const username = config.get('mongo.username');
  const password = config.get('mongo.password');
  const server = config.get('mongo.server');
  const port = config.get('mongo.port');
  const database = config.get('mongo.database');

  const auth = username ? `${username}:${password}@` : '';

  return `mongodb://${auth}${server}:${port}/${database}`;
};

const connection = connect(_connection(), { useNewUrlParser: true });

module.exports = connection;
