var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require ('fs');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

/* This variables stores the messages and keep on growing till server is ON, once server restarts it will again start from basic data defined below
 	We can also used local json file for storing messages so that messages will persist */
/*var messages = [
	{
		name: "Mak",
		message: 'Hi'
	},{
		name: "Jake",
		message: 'Hello'
	},{
		name: "El",
		message: 'Howdy'
	}
];*/

var messages = require('./chatHistory.json');


app.get('/messages', (req, res) => {
	res.send(messages);
});

app.post('/messages', (req, res) => {
	console.log(req.body);
	messages.push(req.body);
	io.emit('message', req.body);
	res.sendStatus(200);

	fs.writeFile("chatHistory.json", JSON.stringify(messages), (err) => {
		console.log("Messages saved into history file",'\n\n\n');
	});
});

io.on('connection', (socket) => {
	console.log(' user is connected !')
})

var server = http.listen(3000, () => {
	console.log('Server started listening on port : '+ server.address().port);
});