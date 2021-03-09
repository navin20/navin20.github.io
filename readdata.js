// var mongodb=require('mongodb');  
// var MongoClient=mongodb.MongoClient;  
// var url='mongodb://localhost:27017/';  
// MongoClient.connect(url,function(error, databases){// use for to connect to the databases  
// if(error){  
//     throw error;  
  
// }  
// var dbobject=databases.db('navigcollection');//use for create database   
// console.log("databases is created")  
// databases.close();  
  
// })  


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://navin:n1a2v3i4n5@cluster0.5fjnh.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://navin:n1a2v3i4n5@cluster0.5fjnh.mongodb.net/<dbname>?retryWrites=true&w=majority";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   //Create a collection name "customers":
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });





var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://navinrow:n1a2v3i4n5@cluster0.ikxo1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
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
//     { name: 'Viola', address: 'Sideway 1633'}
//   ];
  dbo.collection("customers").find({name:'John'}).toArray (function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
