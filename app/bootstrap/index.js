const express = require("express");
const exphbs = require('express-handlebars');
const path = require('path');

const hbs = exphbs.create({
    extname: '.handlebars', // extension for handlebars files
    layoutsDir: path.join(__dirname, '../views/layouts'), // layout directory
    defaultLayout: 'main', // default layout file
});

module.exports = app => {
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, '../views'));
    app.use('/static' ,express.static(path.join(__dirname ,'../../public')))
};