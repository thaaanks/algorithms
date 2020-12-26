* Day 14
Given an array of integers, 
find the maximal absolute difference between any two of its adjacent customElements.

Example>
for inputArray = [2,4,1,0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3. 
for inputArray = [2,9,1,0], the output should be arrayMaximalAdjacentDifference(inputArray) = 8. 

Hints>
Math.abs()
*/

// 내 답안, 왜 문제답에서 0은 제외하고 계산하지??
function arrayMaximalAdjacentDifference(inputArray){
    let max = Math.max.apply(null, inputArray);
    let min = Math.min.apply(null, inputArray);
    let answer - max - min;
    return answer;
}

let inputArray = [2,4,1,0];
arrayMaximalAdjacentDifference(inputArray)


