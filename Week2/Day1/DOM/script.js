console.log("scripted attached")

function changeText(element){
    console.log(element)
    element.innerText = "I've been clicked"
    element.style.backgroundColor = "blue"
}

function over(element){
    element.style.border = "20px solid red"
}

function out(element){
    element.style.border = "";
}

function signUserOut(element){
    element.innerText = "Sign In"
    var loggedUserField = document.querySelector("#loggedUser")
    loggedUserField.remove()
}

function modeSelect(element){
    var body = document.querySelector("body");
    console.log(element.value)
    if (element.value == "dark"){
        body.classList.add("dark")
    } else {
        body.classList.remove("dark")
    }
}