const express = require("express");
const app = express();

require('./bootstrap')(app);
require("./routes/index")(app);

module.exports = () => {
    const port = process.env.APP_PORT;
    app.listen(port, () => {
        console.log(`app is running on http://localhost:${port}`)
    });
};