const express 	= require('express');
const router 	= express.Router();

router.get('/create', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		res.render('user/create');
	}else{
		res.redirect('/login');
	}
});
router.post('/create', (req, res)=>{
	
	/*var user = [req.body.uname, req.body.password, req.body.email];
	var newlist = req.session.userlist;
	newlist.push(user);
	req.session.userlist = newlist;*/
	
	res.send('New user info:'+
				"<br> Username: "+req.body.username+
				"<br> Password: "+req.body.password+
				"<br> Email: "+req.body.email
			);
});

router.get('/edit/:id', (req, res)=>{

	var user = {
		username: 'test',
		password: 'test',
		email: 'test@aiub.edu'
	};
	res.render('user/edit', user);
});

router.post('/edit/:id', (req, res)=>{
	res.redirect('/home/userlist');
});

router.get('/delete/:id', (req, res)=>{
	var user = {username: 'isrita', password: '124', email: 'email@gmail.com'};
	res.render('user/delete', user);
});

router.post('/delete/:id', (req, res)=>{
	res.redirect('/home/userlist');
});

module.exports = router;