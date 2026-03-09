const express = require('express');
const app = express();
const path = require('path');

const logger = require('morgan');

const jokeController = require('./routes/jokes');

const PORT = process.env.PORT || 3001;


app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', jokeController);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("app/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./app/public/index.html"));
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));