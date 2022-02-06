const connectToMongo = require("./config/db.config");
const express = require('express')

// connection  with mongoose and mongodb start
connectToMongo();
// connection  with mongoose and mongodb end

// main standard
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

app.use(express.json());
app.use('/movies', require('./routes/movie.routes'));
app.use('/genres', require('./routes/genre.routes'));
app.use('/artists', require('./routes/artist.routes'));
app.use('/users', require('./routes/user.routes'));



app.listen(port, () => {
    console.log(`server js welcome ${port}`)
})