Given array of integers, remove each kth element from it.

Example>
For inputArray = [1,2,3,4,5,6,7,8,9,10] and k = 3, 
the output should be extractEachKth(inputArray,k)  = [1,2,4,5,7,8,10].

Hints>
filter()

// 내 답안1
function extractEachKth(inputArray,k){
    let max = inputArray.length;
    for (i=1; k*i<=max; i++){
       let idx = inputArray.indexOf(k*i);
       inputArray.splice(idx,1);
        console.log(inputArray);
     }
     return inputArray;
 } 

 let inputArray = [1,2,3,4,5,6,7,8,9,10];
 let k = 3;
 extractEachKth(inputArray,k)
 
// 출제자 답안
function extractEachKth(nums, index) {
    return nums.filter((value, i) => (i + 1) % index !== 0);
}
