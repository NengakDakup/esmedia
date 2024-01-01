const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('index', {
        title: 'ES MEDIA - HOME',
        route: 'home'
    })
});

module.exports = router;