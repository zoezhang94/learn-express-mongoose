const express = require('express');
const app = express();
const port = 3001;


app.use(express.json());

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.use(function (req, res, next) {
  console.log('hello');
  next(new NotFoundError());
});

app.use(function(err, req, res, next) {
  console.log(`Error occurred: ${err.message}`);
  next(); 

});

app.get('/', (req, res) => {
  return res.send({ping: 'pong'});
});

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});
