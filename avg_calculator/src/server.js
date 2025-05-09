const express = require('express');
const morgan = require('morgan');
const { PORT } = require('./config');
const numbersRoute = require('./routes/numbers');

const app = express();
app.use(morgan('dev'));
app.use('/numbers', numbersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
