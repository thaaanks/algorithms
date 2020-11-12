#. 평균 구하기
>> 문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

>> 제한사항
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

>> 입출력 예
arr	return
[1,2,3,4]	2.5
[5,5]

// 내 답안
function solution(arr) {
    let answer = 0;
    for (let i=0; i<arr.length; i++){
        answer += arr[i];
    }
    answer = answer/arr.length;
    return answer;
}


// 다른답안1
function average(array){
    return array.reduce((a, b) => a + b) / array.length;
}
// 화살표함수 사용법
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98




// 다른답안2
function average(array){
var result = array.reduce(function(a,b){ return a + b; });
return result/array.length;
}