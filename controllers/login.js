const express = require('express');
const db     =  require('')
const router = express.Router();

router.get('/', (req, res) => {
	res.render('login/index');
});

router.post('/', (req, res) => {

	//  req.body.username
	//  req.body.password

	var sql = "select * from user where username='" + req.body.username + "'and password='" + req.body.password + "'";

});

module.exports = router;