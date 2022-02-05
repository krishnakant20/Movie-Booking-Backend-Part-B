// const connectToMongo = require("./db");
const express = require('express')

// connectToMongo();

const app = express();
const port = 9000;

app.use(express.json());
app.use('/movies', require('./routes/movie.routes'));
app.use('/genres', require('./routes/genre.routes'));
app.use('/artists', require('./routes/artist.routes'));

app.listen(port, () => {
    console.log(`server js welcome ${port}`)
})