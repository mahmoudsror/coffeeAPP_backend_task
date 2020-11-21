const express = require('express');
const path = require('path');
const app = express();

require(path.resolve('init','init.js'))(app);

app.listen(process.env.BACKEND_PORT,() => {
  console.info("Welcome to Coffee App, listen to %s", process.env.BACKEND_PORT);
});

module.exports = app;



