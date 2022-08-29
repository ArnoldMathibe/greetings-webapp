const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");
const greeting = require("./greet")();
const flash = require("express-flash");

const app = express();

app.use(session({secret: "index", resave: false, saveUninitialized: true,}));

app.use(flash());
app.engine("handlebars", exphbs.engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static("public"));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//parse application/json
app.use(bodyParser.json());

app.get("/", function(req, res){
    console.log(greeting.fName, greeting.lang)
    res.render("index", {
        message: greeting.greet(greeting.fName, greeting.lang),
        count: greeting.counter()
    });
});

app.post("/greet", function(req, res){
    
    let nameUser = req.body.name;
    let myLang = req.body.language;
    let number = /[0-9]/g.test(nameUser)
    console.log(nameUser);
    if (nameUser && myLang && number == false) {
        greeting.greet(nameUser, myLang);
        greeting.fName = req.body.name;
        greeting.lang = req.body.language;
        greeting.userName(greeting.fName);
        greeting.greet(nameUser, myLang);
    }else{
        req.flash("info", greeting.errMessage(nameUser, myLang));
    }
    

    res.redirect("/");
});

app.get("/greeted", function( req, res)
{
    res.render("greeted", {
        message: greeting.myNames(),
      
    });
});
app.post("/greeted", function( req, res){
    greeting.fName = req.body.name;
    greeting.lang = req.body.language;
    greeting.userName(greeting.fName);
    greeting.allNames();

    res.redirect("/");
})

app.get("/counter/:lastName", function(req, res){
    let user = req.params.lastName;
    console.log(user);
    greeting.userCounter(user);
    res.render("counter", {
        username: user,
        numberOfTimes: greeting.userCounter(user),
    });
});

app.post("/reset", function(req, res){
    greeting.resetBtn();
    res.redirect("/");
})

const PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
    console.log("App Has Started");
});