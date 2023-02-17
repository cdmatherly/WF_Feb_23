// variables 

var someVariable = 10;

// data types

//boolean
var bool = true // true or false  -- used a lot in conditionals

//string

var string = "A collection of characters 5 6 " //either double or single quotes, interchangable
var string2 = " I can't wrap this in single "

//array 

var arr = ["a", "collection", "of", "values", 9, true]
//adding to an array

arr.push("one more val")

//removing from array

var poppedVal = arr.pop()

// null and undefined

var thisIsEmpty = null;

var unknown = undefined;

var nums = [1,2,3]

console.log(nums[8])

// numbers

var float = 1.9
var integer = 9

//operators

/*
+ addition OR concatenation (combining strings)
- subtraction
/ division
* multiplication
% modulus -- gives the remainder 
= assignment 

combos: += -= 

*/

// conditionals - statement that resolves to a boolean, used to control flow of code

if (!(integer > 9)){
    console.log("My condition was true")
}

//comparators -- compare values!

/*
<
<=
>
>=
== attempts type conversion before evaluation
=== compares as is
!=

*/

console.log('1' == 1) //converts the number to a string, then compares
console.log('1' === 1) // compares as is

//loops - code structure that allows to run a set of instructions a set amount of times based on a condition

//for loop - three parts, declarations, the conditional, the iteration clause
for (var i=0; i < 10; i++){
    console.log(i)
}

//while loop only has a condtion
var i = 0
while(i < 10){
    console.log(i)
    i++
}

//functions - reusable blocks of code that we can invoke (call) they may take some input, they return output
// a function call is replaced by the functions return value
function myFunction(someParam){
    console.log(someParam)
    return 9
}

var result = myFunction("Hello there")
console.log(result)


//Objects -- KEY VALUE PAIRS

var name = "Bob"
var age = 27
var occupation = "Builder"
var catchPhrase = "Can we build it? Yes we can!"

var bobsInfo = {
    name: "Bob",
    age: 27,
    occupation: "Builder",
    catchPhrase: "Can we build it? Yes we can!",
    build: function(){
        console.log("Bob sings and builds and gets it done")
    },
    printInfo: function(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.occupation)
        console.log(this.catchPhrase)
    }
}

//accessing values
// console.log(bobsInfo.name)

// console.log(bobsInfo['name'])

//adding values
bobsInfo.height = "2ft" //bobsInfo['height'] = "2ft"

// console.log(bobsInfo)

// bobsInfo.build()
bobsInfo.printInfo()



