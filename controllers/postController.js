const express = require('express');
const router = express.Router();


router
    .get('/', (req, res) => {
        // index
        res
            .status(200)
            .json({msg: `It's a GET request`})
    })
    .get('/new', (req, res) => {
        // new
        res
            .status(200)
            .json({msg: `It's a GET request`})
    })
    .post('/', (req, res) => {
        // create
        res
            .status(200)
            .json({msg: `It's a POST request.`});
    })
    .get('/:id', (req, res) => {
        // show
        res
            .status(200)
            .json({msg: `It's a GET request`})
    })
    .get('/:id/edit', (req, res) => {
        // edit
        res
            .status(200)
            .json({msg: `It's a GET request`})
    })
    .put(`/:id`, function (req, res) {
        res
            .status(200)
            .json({msg: `It's a PUT request.`});
    })
    .delete(`/:id`, function (req, res) {
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