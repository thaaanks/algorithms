* Day3
write a function that splits an array (first argment) into groups
the length of size (second argument) and returns them as a two dimensional array.
chunkyMonkey(["a","b","c","d"],2) should retrun (["a", "b"],["c","d"])
chunkyMonkey([0,1,2,3,4,5], 4) should return [[0,1,2,3],[4,5]]

Hints 
slice()
*/

// 1차시도
function chunkyMonkey(array, index){
    let originArray = array;
    let latter = originArray.slice(index);
    let former = originArray - latter;
    let result = (former, latter);
    console.log(result);
    return result;
}

// 2차시도 
function chunkyMonkey(array, index){
    let originArray = array;
    let latter = originArray.slice(index);
    let former = originArray.slice(0, index);
    let result = (former, latter);
    console.log(result);
    return result;
}

// 3차시도 
function chunkyMonkey(array, index){
    let originArray = array;
    let latter = originArray.slice(index);
    let former = originArray.slice(0, index);
    let result = `(${former},${latter})`;
    console.log(result);
    return result;
}

chunkyMonkey(["a","b","c","d"],2);
chunkyMonkey([0,1,2,3,4,5], 4);



// 공부
slice 는 배열,
split 은 문자열나누기