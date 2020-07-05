const {connect} = require('mongoose');

const database = connect('mongodb://localhost:27017/test2', {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = database;