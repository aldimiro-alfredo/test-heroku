const express = require("express");
const app = express();

app.use(express.json())

app.get('/', (request, response) => {
    return response.json({ message: 'Server up' })
})

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});