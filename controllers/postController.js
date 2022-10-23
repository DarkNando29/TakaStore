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
GET     index   /posts
GET     new     /posts/new
POST    create  /posts
GET     show    /posts/:id
GET     edit    /posts/:id/edit
PUT     update  /posts/:id
Delete  delete  /posts/:id
*/