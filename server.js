const connectToMongo = require("./config/db.config");
const express = require('express')
const session = require('express-session')
const cors = require('cors')

// connection  with mongoose and mongodb start
connectToMongo();

// main standard
const app = express();
const port = 8085;

// localhost:8085

app.use(cors());

app.use(session({secret:"pawar123"}));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

app.use(express.json());
app.use('/api/movies', require('./routes/movie.routes'));
app.use('/api/genres', require('./routes/genre.routes'));
app.use('/api/artists', require('./routes/artist.routes'));

app.use('/api', require('./routes/user.routes'));



app.listen(port, () => {
    console.log(`server js welcome ${port}`)
})