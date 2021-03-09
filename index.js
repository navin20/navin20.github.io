const express = require('express');
// const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
app.use(express.static("./public"));

// const playerRoutes = require('./routes/player.routes');
// const homeRoutes = require('./routes/index.routes');
// const yero = require('')
const port = 2000;







app.set('port', process.env.port || port); // set express to use this port
const viewsDirPath = path.join(__dirname, "templates", "views");
app.set('views',viewsDirPath); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
// app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
// app.use(fileUpload()); // configure fileupload
app.get("/",function(req,res,next){
    res.render('index.ejs')
})
app.get("/login",function(req,res,next){
    res.render('login1.ejs')
})
app.get("/signup",function(req,res,next){
    res.render('signup.ejs')
})
app.get("/signup1",function(req,res,next){
    res.render('passwordvalidation.ejs')
})

// routes for the app
// app.use('/', homeRoutes);
// app.use('/test')
// app.use('/player', playerRoutes);
// app.get('*', function(req, res, next){
//     res.status(404);

//     res.render('404.ejs', {
//         title: "Page Not Found",
//     });

// });

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

