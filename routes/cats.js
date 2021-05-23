const express = require('express');

const router = express.Router();

const cat = require('../controllers/cats');


router.get('/', (req,res) => {
    cat.index(req,res);
});

router.post('/addcat', (req,res) => {
    cat.create(req,res);
});

router.get('/getcat', (req,res) => {
    cat.list(req,res);
});


module.exports = router;