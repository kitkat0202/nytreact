//  Dependencies
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const keys = require('./config/keys')

let key = keys.API_KEY
// Database Models
// const db = require("./models")

// const cheerio = require("cheerios")
// const axios = require("axios")

const PORT = process.env.PORT || 3001

// express
const app = express()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local nytreact database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact"
mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`PORT: ${PORT} if on localhost --> http://localhost:${PORT}`)
})