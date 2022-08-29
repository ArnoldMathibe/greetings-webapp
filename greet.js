module.exports = function Greeting(){
    var fName = "";
    var lang = "";
    var namesGreeted = {};
    var messages = "";
    var errorMessage = "";
    function englishGreeting(names){
            return 'Hello, ' + names;
        }
    function tswanaGreeting(names){
            return "Dumela, " + names;
    }
    function isiXhosaGreeting(names){
            return "Molo, " + names;
    }
    function counter(){
        let listNames = Object.keys(namesGreeted);
        console.log(namesGreeted);
        return listNames.length;
    }

    function errMessage(name, languages){
        if (name == "" && languages == null) {
            errorMessage = "Please enter a name and select one language";
            return errorMessage;
        }
        if(name === ""){
            errorMessage = "Please enter a name";
            return errorMessage;
        }
        if (/[0-9]/g.test(name)) {
            errorMessage = "Please put letters only";
            return errorMessage;
        }
        if (languages === undefined) {
            errorMessage = "Please Choose Language";
            return errorMessage;
        }
        
    }
    function greet(name, languages){
       
        if (languages == "setswana") {
            messages = tswanaGreeting(name);
        }else if (languages == "isiXhosa") {
            messages = isiXhosaGreeting(name);
        }else if (languages == "english") {
            messages = englishGreeting(name);
        }
        return messages;
    }

    function userName(name){
        if(namesGreeted[name] == undefined){
            namesGreeted[name] = 1;
        }else{
            namesGreeted[name]++;
        }
    }

    function resetBtn(){
        namesGreeted = {};
    }

    function allNames(){
        return namesGreeted;
    }

    function myNames(){
        let listNames = Object.keys(namesGreeted);
        return listNames;
    }

    function userCounter(name){
        console.log(namesGreeted[name]);
        return namesGreeted[name];
    }
    return{
        englishGreeting,
        tswanaGreeting,
        isiXhosaGreeting,
        counter,
        fName,
        lang,
        greet,
        userName,
        allNames,
        myNames,
        userCounter,
        errMessage,
        resetBtn,
        };
    };

