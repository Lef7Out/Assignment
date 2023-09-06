// function computerChoice() {
//const choices = ["rock", "paper", "scissors"];
//let randomChoice = Math.floor(Math.random() * choices.length);
//let compChoice = choices[randomChoice];
//console.log(compChoice);
//}
//computerChoice()

let items ="mango,apple,sugar,milk,soap,banana";
let arrItems = items.split(",");
let fruits = [];
let beverages = []
for (let i = 0; i < arrItems.length; i++) {
 if (
   arrItems[i] === "mango" ||
   arrItems[i] === "apple" ||
   arrItems[i] === "banana"
 ) {
    
    fruits.push(arrItems[i]);
 } else {
    beverages.push(arrItems[i]);
 }
} 

function fruitsOutput() {
    console.log(fruits.join(","));
}
function beverageOutput() {
    console.log(beverages.join(","))
}

beverageOutput();
fruitsOutput();

