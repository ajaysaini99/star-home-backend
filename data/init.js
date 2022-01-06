const mongoose = require('mongoose');

require('./../models/home');

const uri = 'mongodb://localhost:27017/starHomeDB';

// setting deprecations to false
// mongoose.set('useFindAndModify', false);
mongoose.set('returnOriginal', false);

mongoose.connect(uri, { useNewUrlParser: true });

mongoose.connection.on('open', () => {
  console.log('Connection to DB has been established');
});

mongoose.connection.on('error', err => {
  console.log('Error occurred while connecting >> ', err);
  process.exit(1);
});
