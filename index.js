require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 3333;

const app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
