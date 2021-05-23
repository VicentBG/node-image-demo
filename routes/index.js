const express = require('express');

const router = express.Router();

const path = require('path');


router.use((req,res,next) => {
    console.log('/' + req.method);
    next();
});

router.get('/', (req,res) => {
    res.sendFile(path.resolve('views/index.html'));
});


module.exports = router;