const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send('<span style="color: #f00;"> Hello Word ! </span>');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("listenin on port " + PORT);
})