let fs = require("fs");
fs.readfile("./text.txt", (err,data) => {
	if (err) throw err ; 
	console.log(data);


})