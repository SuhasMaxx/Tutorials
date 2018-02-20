var fs = require ('fs');
// Reading relative directory
fs.readdir("./Directory/", (err, data) => {
	console.log("Lets see what we got after reading folder \"Directory\" : >> "+data);
}) 

// Reading system directory
fs.readdir("c:/", (err, data) => {
	console.log("Lets see what we got after reading C: >> ",data,'\n\n\n');
}) 

// PART 2 : Writing into  a file 
var writeData = {
	"name" : "Obelix"
};
// Lets add dynamic data in the JSON
var newData = new Date();
writeData.date = newData.toLocaleTimeString() + " || " + newData.toLocaleDateString();
fs.writeFile("written.json", JSON.stringify(writeData), (err) => {
	console.log("Writing finished, check written.json and observe the date attribute",'\n\n\n');
});
