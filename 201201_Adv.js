
/* Day 1. n children have got m pieces of candy. 
Each child must eat exactly the same amount of candy as any other child.
Determine how many pieces of candy will be eatyen by all the children together. 

ex) n = 3, m = 10, answer = 9 */


function candies(n, m){
    const candies = Math.floor(m/n) * n;
    console.log(candies);
    return candies;
}
candies(3,10);




/*
Day 2. You have deposited a amount of dollars into your bank account.
Each year your balance increases at the same growth rate.
Find out how long it would take for your balance to pass a specific threshold 
with the assumption that you don't make any additional deposits.

ex)
deposite = 100
rate = 20
threshold = 170

depositProfit(deposit, rate, threshold) = 3 <- answer

year0 : 100
year1 : 120
year2: 144
year3: 172.8
*/

function depositProfit(deposit, rate, threshold) {
    let i = 1;
    let summe = deposit + deposit * rate/100;
    while (summe <= threshold){
        i = i + 1;
        summe = summe + summe * rate/100;
        // console.log(i);
        // console.log(summe);
    }
    return i;
}
const answer = depositProfit(100, 20, 170);
console.log(answer);