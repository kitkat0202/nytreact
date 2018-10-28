//  Dependencies
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact", { useMongoClient: true })

app.listen(PORT, () => {
    console.log(`PORT: ${PORT} if on localhost --> http://localhost:${PORT}`)
})