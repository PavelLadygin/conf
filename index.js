const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

app.use('/slick', express.static(__dirname + '/slick'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));

app.listen(1140, () => console.log('Server started'));
