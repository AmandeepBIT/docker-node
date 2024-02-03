var express = require('express');
var path = require('path');
var port = 3000;
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Express server listening on port ${port}`));
module.exports = app;
