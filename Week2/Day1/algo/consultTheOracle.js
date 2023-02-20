// Math Library Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
​
​
var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();
​
console.log(floor);
console.log(ceiling);
console.log(random);
​
​
/*
Dice Roller
Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.
​
Bonus Challenges
Level 1: Modify the function to roll for a dice with any side based on a sides parameter.
Level 2: Add another parameter for the number of die to roll and return each of the rolls performed as an array.
Level 3:Include another parameter that represents a "Dice Check" and the dice roll must meet or exceed that Dice Check value. 
        Return "You've slain the monster!" if you meet or exceed the Dice Check, otherwise return "The monster's slain you!"
*/
​
function d6() {
    var roll = Math.random();
    // your code here
    return roll;
}
​
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
​
/*
Consult The Oracle (Magic 8 Ball)
Using the following array, write a function that will answer all of our questions by randomly choosing a response
​
Bonus Challenges
Level 1: Include a parameter for the array for the function to use.
Level 2: Add another parameter for number of random responses and return an array of each result.
*/
​
​
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];