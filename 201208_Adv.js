/* Day 8
>> DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

>> event listeners, Math.random()

>> DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

>> STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/


let diceContainer = document.querySelector(".diceContainer");
let div = document.querySelector("div");
let dice = document.querySelector(".dice");
let d01 = document.querySelector(".d01");
let d02 = document.querySelector(".d02");
let d03 = document.querySelector(".d03");
let d04 = document.querySelector(".d04");
let d05 = document.querySelector(".d05");
let d06 = document.querySelector(".d06");

let diceArray = [];
diceArray.push(d01);
diceArray.push(d02);
diceArray.push(d03);
diceArray.push(d04);
diceArray.push(d05);
diceArray.push(d06);

function showingNewDice(){
    let newNumber = Math.floor(Math.random()*6 +1);
    // console.log(newNumber);
    dice.classList.remove('showing');
    let selected = diceArray[newNumber -1];
    selected.classList.add('showing');
}
function init(){
    diceContainer.addEventListener("click", showingNewDice);
}
init();

