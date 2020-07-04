const express = require('express');
const morgan = require('morgan');
const port = 3090;
const app = express();

app.use(morgan('tiny'));
app.use(express.static('./public'));

app.listen(port, () => {
  console.log(`running @ http://localhost:${port}`);
})