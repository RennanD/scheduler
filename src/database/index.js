const {connect} = require('mongoose');

const database = connect(process.env.MONGODB, {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = database;