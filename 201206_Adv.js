* Day 6
Given an array of strings, 
sort them in the order of increasing lengths.
If two strings have the same length, 
their relative order must be the same as in the initial array.

ex> for inputArray = ["abc", "", "aaa","a","zz"]
the output should be sortByLength(inputArray) = ["", "a", "zz","abc","aaa"]

Hints> sort()
*/

// ⭐오늘 배운 것 ==================================

// =================================================

// 내 답안 (인터넷 참조..)
function sortByLength(inputArray){
    let sorted = inputArray.sort(function(a,b){
         return a.length - b.length;
     });
     return sorted;
 }
 sortByLength(["abc", "", "aaa","a","zz"]);
 

// 출제자 답안 (아직 안봄)


// 인터넷 검색전 고군분투 흔적들...
function sortByLength(inputArray){
    let elementLengthArr = [];
    let i = 0;
   //  let arrIndex = inputArray[i]; 
    for(let i=0; i<inputArray.length; i++){   
        let arrIndex = inputArray[i]; 
          console.log(arrIndex);
        elementLengthArr.push(arrIndex.length);
          console.log(elementLengthArr);
    }
    elementLengthArr.sort(function(a,b){
       return a-b;
    })
    console.log(elementLengthArr);
}
sortByLength(["abc", "", "aaa","a","zz"]);




