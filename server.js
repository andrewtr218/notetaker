const express = require("express");

const htmlRoutes = require("./routes/htmlroutes")

const apiRoutes = require("./routes/apiroutes")

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(apiRoutes);

app.use(htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});