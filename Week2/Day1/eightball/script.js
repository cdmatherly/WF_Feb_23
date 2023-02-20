console.log("Script Linked");

var answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
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

var ballElement = document.querySelector("#ball");
var nowAnsweringElement = document.querySelector("#nowAnswering");
var responseFieldElement = document.querySelector("#responseField");
var questionInputElement = document.querySelector("#questionInput");
var askButtonElement = document.querySelector("#askButton");
var response = "";

function consultEightBall(){
    // console.log("function running")
    nowAnsweringElement.innerText = questionInputElement.value;
    questionInputElement.value = "";
    ballElement.classList.add("elementToShake");
    setTimeout(removeShake,3000);
    setTimeout(updateResponse,3000);
    // console.log(questionInputElement.value)
}

function updateResponse(){
    response = answers[Math.floor(Math.random() * answers.length)];
    responseFieldElement.innerText = response;
}

function removeShake(){
    ballElement.classList.remove("elementToShake");
}