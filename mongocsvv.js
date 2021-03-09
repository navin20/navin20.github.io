const csvtojson = require("csvtojson");




// var MongoClient = require('mongodb').MongoClient;




csvtojson()
  .fromFile("tradeinfo.csv")
  .then(csvData => {
    console.log(csvData);
    var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://navinrow:n1a2v3i4n5@cluster0.ikxo1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [csvData];
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

dbo.collection("tradeinfos").insertMany(csvData, function(err, res) {
       if (err) throw err;
         console.log("Number of documents inserted: " + res.insertedCount);
         db.close();
});
});

console.log('This is after the read call');





});