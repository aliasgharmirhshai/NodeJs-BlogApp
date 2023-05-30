const express = require("express");
const app = express();
require('./bootstrap')(app);

app.get('/', (req, res) => {
    res.render('main', {userId: "ali"});
});

app.get('/test', (req, res) => {
    res.send("Hello");
});

module.exports = () => {
    const port = process.env.APP_PORT;
    app.listen(port, () => {
        console.log(`app is running on http://localhost:${port}`)
    });
};