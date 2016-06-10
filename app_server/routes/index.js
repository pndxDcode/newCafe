var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')

/* get home page */
router.get ('/', ctrlMain.index);

module.exports = router;

/*
var homepageController = function (req, res) {
        res.render('index', {title: 'express' });
    };

/* Get Home Page 
router.get ('/', homepageController);

*/
