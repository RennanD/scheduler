const {connect} = require('mongoose');

const database = connect('mongodb://localhost:27017/test', {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = database;