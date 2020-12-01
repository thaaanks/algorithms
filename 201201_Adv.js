
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

