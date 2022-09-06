const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send('<span style="color: #f00;"> Hello Word ! </span>');
})

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });