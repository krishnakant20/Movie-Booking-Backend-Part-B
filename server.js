const connectToMongo = require("./config/db.config");
const express = require('express')

// connection  with mongoose and mongodb start
connectToMongo();

// main standard
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

app.use(express.json());
app.use('/api/movies', require('./routes/movie.routes'));
app.use('/api/genres', require('./routes/genre.routes'));
app.use('/api/artists', require('./routes/artist.routes'));
app.use('/api/users', require('./routes/user.routes'));



app.listen(port, () => {
    console.log(`server js welcome ${port}`)
})