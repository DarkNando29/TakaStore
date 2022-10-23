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
GET     index   /reviews
GET     new     /reviews/new
POST    create  /reviews
GET     show    /reviews/:id
GET     edit    /reviews/:id/edit
PUT     update  /reviews/:id
Delete  delete  /reviews/:id
*/