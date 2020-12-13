* Day 6
Given an array of strings, 
sort them in the order of increasing lengths.
If two strings have the same length, 
their relative order must be the same as in the initial array.

ex> for inputArray = ["abc", "", "aaa","a","zz"]
the output should be sortByLength(inputArray) = ["", "a", "zz","abc","aaa"]

Hints> sort()
*/


function sortByLength(inputArray){
    for(let i=0; i<inputArray.length; i++){
        let elementLengthArr = [];
        elementLengthArr.push(inputArray[i].length);
        console.log(elementLengthArr);
        inputArray[i].concat([i]);
        console.log(inputArray);

    }
    elementLengthArr.sort(function(a,b){
        return a-b;
    });
    cons
}




