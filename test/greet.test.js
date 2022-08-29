var assert = require("assert");
const Greeting = require("../greet.js");

describe('Name Greetings With Several Languages', function()
{
    it("Should Greet Bob in English", function()
    {
        const greeting = Greeting();
        assert.equal(greeting.englishGreeting('Bob'), "Hello, Bob");
    });
    it("Should Greet Arnold in Setswana", function()
    {
        const greeting = Greeting();
        assert.equal(greeting.tswanaGreeting('Arnold'), "Dumela, Arnold");
    });
    it("Should Greet Sipho in IsiXhosa", function()
    {
        const greeting = Greeting();
        assert.equal(greeting.isiXhosaGreeting('Sipho'), "Molo, Sipho");
    });
    it("If An Empty String Is Passed, It Should Write Hello, My Friend", function()
    {
        //assert.equal(greet(''), "");
    });
})