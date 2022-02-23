const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const daily = require("./routes/api/daily")
const bodyParser = require('body-parser');
const User = require('./models/User');
const passport = require('passport');
require('./config/passport')(passport);
const port = process.env.PORT || 5000;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
    


app.get("/", (req, res) =>{ 
    res.send("Hello Wordl")
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use("/api/users", users);
app.use("/api/daily", daily )

