// const fs = require("fs"); 

// // Read users.json file 
// // fs.readFile("users.json", function(err, data) { 

// fs.readFile('data.json', function(err, data) { 
	
	
// 	// Check for errors 
// 	if (err) throw err; 

// 	// Converting to JSON 
// 	const users = JSON.parse(data); 
	
// 	console.log(users); // Print users 
// }); 


const fs = require('fs');

fs.readFile('example_1.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(typeof(student));





    
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://navinrow:n1a2v3i4n5@cluster0.ikxo1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [student];
//   var myobj = [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}];
//     console.log(typeof(myobj));

dbo.collection("c1").insertMany(myobj, function(err, res) {
       if (err) throw err;
         console.log("Number of documents inserted: " + res.insertedCount);
         db.close();
});
});

console.log('This is after the read call');





//   ];
//   
  });
