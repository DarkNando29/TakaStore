const express = require('express');
const { isLoggedIn } = require("./middleware"); // import isLoggedIn custom middleware
const router = express.Router();


router
    .get('/', isLoggedIn, (req, res) => {
        // index
        res
            .status(200)
            .json({msg: `It's a GET request`})
    })
    .get('/new', isLoggedIn, (req, res) => {
        // new
        res
            .status(200)
            .json({msg: `It's a GET request`})
    })
    .post('/', isLoggedIn, (req, res) => {
        // create
        res
            .status(200)
            .json({msg: `It's a POST request.`});
    })
    .get('/:id', isLoggedIn, (req, res) => {
        // show
        res
            .status(200)
            .json({msg: `It's a GET request`})
    })
    .get('/:id/edit', isLoggedIn, (req, res) => {
        // edit
        res
            .status(200)
            .json({msg: `It's a GET request`})
    })
    .put(`/:id`, isLoggedIn, function (req, res) {
        res
            .status(200)
            .json({msg: `It's a PUT request.`});
    })
    .delete(`/:id`, isLoggedIn, function (req, res) {
        res
            .status(200)
            .json({msg: `It's a DELETE request.`});
    });

module.exports = router;

/*
GET     index   /reviews
GET     new     /reviews/new
POST    create  /reviews
GET     show    /reviews/:id
GET     edit    /reviews/:id/edit
PUT     update  /reviews/:id
Delete  delete  /reviews/:id
*/