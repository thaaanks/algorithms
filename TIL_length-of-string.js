// 공부 - 코드깎는 노인

// 문자열의 길이를 알아내는 방법

let input = "coding";
let count = 0;
while(input[count] !== undefined){
    console.log(input[count]);
    count = count + 1;
}
console.log('끝');
console.log(count);

// 참고로 JS에는 파이썬 처럼 -1 인덱스가 없는듯.



// // 문자열반복해보기.  for문 i++ 대신, 다르게 해보기. (반대로 빼보기. i--)
let input = '#';
let count = 3;
let result = ''; // 빈문자열을 넣어주고
whilte (count > 0) {
    result = result + input; //문자열을 하나씩 넣어주는것.
    count = count -1;
}
console.log(result);



// 함수 재활용 연습 (argument사용연습)

let ff = function(amount){
    let input = '#';
    let count = amount;
    let result = '';
    while (count > 0){
        result = result + input;
        count = count - 1;
    }
    console.log(result);
};
ff(3);
ff(4);
ff(7);


/// while(true)와 break 사용법 연습 (계속하다가 특정조건되면 그만두기)
let count = 0;
while(true){
    count = count + 1;
    ff(count); // 이 함수에는 위에 있음
    if (count > 10){
        break;
    }
}

let input = "Coding";
let count = 0;
while(count < 10){
    console.log(input[count]);
    count = count + 1;
    if(input[count] === undefined){
        break;
    }
}
console.log('끝');

// 같은걸 이렇게 쓸수도 있다. (while문 변경)
let input = "Coding";
let count = 0;
while(input[count] !== undefined){
    console.log(input[count]);
    count = count + 1;
    }
}
console.log('끝');



// 일부문자만 얻기
let input = "Coding is not that easy";
let range = 4;

console.log(input[i])

let i = 0;
let j = i+1;
let k = j+1;
let l = k+1;

while(true){
    console.log(input[i] + input[j] + input[k] + input[l]);
    if (i > range-1)
}