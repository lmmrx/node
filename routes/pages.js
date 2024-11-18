const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("This is home page!"); 
});

router.get('/about', (req, res)=>{
    res.send("This is about page!"); 
});

module.exports = router;