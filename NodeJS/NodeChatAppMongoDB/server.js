var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose  = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// Go to mlab.com and create a free account. Then create a database and generate connection URL for it. Then add user for that Database and replace <username> and <pasword> by that user credentials
// Use that URL in the dbUrl variable
//for example below is my own generated URL, username is user and password is user; 
var dbUrl = 'mongodb://user:user@ds245548.mlab.com:45548/learning-node'; //TODO : Put your own DB url here

/*Lete create Model for Mongo DB - Mongoose provides modeling for mongoDB*/
var Message = mongoose.model('Message',{
	name: String,
	message: String
})

/*find method will look in db and when we pass empty object it will return all data in the db collection*/
app.get('/messages', (req, res) => {
	Message.find({}, (err, messages) => {
		res.send(messages);	
	})
});

app.post('/messages', (req, res) => {
	var message = new Message(req.body);
	message.save((err) => {
		if(err){
			sendStatus(500)
		} else {
			io.emit('message', req.body);
			res.sendStatus(200);
		}
	})
});

io.on('connection', (socket) => {
	console.log(' user is connected !')
})

mongoose.connect(dbUrl, (err) => {
	console.log('Mongoose connected ', err);
})

var server = http.listen(3000, () => {
	console.log('Server started listening on port : '+ server.address().port);
});