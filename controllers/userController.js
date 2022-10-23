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
GET     index   /users
GET     new     /users/new
POST    create  /users
GET     show    /users/:id
GET     edit    /users/:id/edit
PUT     update  /users/:id
Delete  delete  /users/:id
*/