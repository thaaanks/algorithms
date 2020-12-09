//💥미해결!!!
/* Day3
write a function that splits an array (first argment) into groups
the length of size (second argument) and returns them as a two dimensional array.
chunkyMonkey(["a","b","c","d"],2) should retrun (["a", "b"],["c","d"])
chunkyMonkey([0,1,2,3,4,5], 4) should return [[0,1,2,3],[4,5]]

Hints 
slice()
*/

// ⭐오늘 배운 것 ==================================
// slice 는 배열 나누기,
// split 은 문자열나누기
// 배열을 요소로 넣고 싶을때는 push로 넣기.
// =================================================

// 최종답안 (답안참조 힌트얻음(push))
function chunkyMonkey(array, index){
    let originArray = array;
    let latter = originArray.slice(index);
    let former = originArray.slice(0, index);
    let result = [];
    result.push(former);
    result.push(latter);
    console.log(result);
    return result;
}

chunkyMonkey(["a","b","c","d"],2);
chunkyMonkey([0,1,2,3,4,5], 4);

// 출제자 답안 
function chunkyMonkey(array, size){
    const nested = [];
    let count = 0;

    while(count < array.length){
        nested.push(array.slice(count, count += size));
    }
}


// 내 답안과 출제자 답안이 같은지 - 근데 왜 false가 나오지??
let question = (chunkyMonkey(["a","b","c","d"],2) === chunkyMonkey2(["a","b","c","d"],2))? true : false;
console.log(question);

let question2 = (chunkyMonkey([0,1,2,3,4,5], 4) === chunkyMonkey2([0,1,2,3,4,5], 4))? true : false;
console.log(question2);


//====================================================
// 1차시도
function chunkyMonkey(array, index){
    let originArray = array;
    let latter = originArray.slice(index);
    let former = originArray - latter;  // 일단 부분이 예상과 다르게 나옴
    let result = (former, latter);
    console.log(result);
    return result;
}

// 2차시도 
function chunkyMonkey(array, index){
    let originArray = array;
    let latter = originArray.slice(index);
    let former = originArray.slice(0, index);
    let result = (former, latter); // 이 부분이 예상과 다르게 나옴
    console.log(result);
    return result;
}

// 3차시도 
function chunkyMonkey(array, index){
    let originArray = array;
    let latter = originArray.slice(index);
    let former = originArray.slice(0, index);
    let result = `(${former},${latter})`;  // 이 부분이 예상과 다르게 나옴
    console.log(result);
    return result;
}





