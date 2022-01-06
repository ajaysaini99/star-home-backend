require('./data/init');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { append } = require('express/lib/response');
const { urlencoded } = require('express');

const homeRouter = require('./routes/home');

const app = express();

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
  )
);
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/home', homeRouter);

app.listen(3000, error => {
  if (error) {
    console.log('error occured whilte listening to the port >> ', error);
  }

  console.log('server started on http://localhost:3000');
});
