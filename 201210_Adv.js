/* Day 10
Given an array of integers, 
find the pair of adjacent elements 
that has the largest product and return that product. 

Example>
For inputArray = [3, 6, -2, -5, 7, 3], 
the output should be adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product. 
*/


// 내 답안
function adjacentElementsProduct(inputArray){
    let pairProductsArray = [];
     for(i=1; i < inputArray.length ; i++){
         let pairproduct = inputArray[i] * inputArray[i-1];
         pairProductsArray.push(pairproduct);
     }
     console.log(pairProductsArray);
     let max = Math.max.apply(null, pairProductsArray); // 왜 null?
     console.log(max);
     return max;
 }
 
 adjacentElementsProduct([3, 6, -2, -5, 7, 3]);

