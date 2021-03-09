
const mongoose = require('mongoose');

const url = "mongodb+srv://navinrow:n1a2v3i4n5@cluster0.ikxo1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ');
        var dbo = db.db("myFirstDatabase");
        dbo.createCollection("customers", function(err, res) {
          if (err) throw err;
          console.log("Collection created!");
        });
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })