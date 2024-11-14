const express = require('express');
const app = express();
const PORT = 3000;


app.get('/chai', (req,res) => {
    console.log('chai is ready !');
    res.send(chai);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  module.exports= app;