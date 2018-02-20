// Method 1 : You can directly access file using require funcion and reas its data
var data = require('./data.json');
console.log('From the data variable and require : ', data);
console.log('Let\'s access data > name is : ', data.name);

// Method 2 : you can access file and read using readFile function

var fs = require ('fs');
// readFile is an asynchronus fucnction so it always needs a callback function, ( as second or third parameter )
// Second parameter is optional, but If you don't pass the second attribute 'UTF-8' the data will be binary byteArray
fs.readFile('./data.json', 'utf-8', function(err, data){ 
	// The data here will be a string and not a JSON - String read in UTF-8 format
	console.log(data);

	// If we want it to be JSON, we need to parse the data
	var d2 = JSON.parse(data);
	console.log('After parsing the data us > name : '+d2.name);
})
