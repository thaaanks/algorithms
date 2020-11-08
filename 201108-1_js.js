
// #.문자열 내림차순으로 배치하기
// >> 문제 설명 >>
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// >> 제한 사항 >>
// str은 길이 1 이상인 문자열입니다.

// >> 입출력 예
//   s	            return
// Zbcdefg     	gfedcbZ	

//--------------------------------------------------
//내 답안
function solution(s) {
    var answer = '';

    // 스트링을 배열로.
    var arr = s.split(""); 

    // 배열순서 내림차순 정렬. 숫자가 아닌 스트링이므로 minus가 아닌 비교연산자 이용!!!
    arr.sort(function(a,b){
        if (a < b) return 1;
        if (a > b) return -1;
        if (a === b) return 0;
    });

    // 배열을 스트링으로
    answer = arr.join(''); 
    return answer;
}


// 모범답안 1
function solution(s) {
    return s.split("").sort((a,b) => a<b ? 1:-1).join("")
}


// 모범답안 2
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}









// >>문제 설명 >>
// array의 각 element 중 divisor로 나누어 떨어지는 값을 
// 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// >>제한사항 >>
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

// >> 입출력 예
// arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]

// >> 입출력 예 설명
// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

// 입출력 예#2
// arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

// 입출력 예#3
// 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

// 내 답안
function solution(arr, divisor) {
    var answer = [];
    for (let i=0; i < arr.length; i++) {
        if (arr[i]%divisor===0){
            answer.push(arr[i]);
        }
        else {}
    } 
    
    answer.sort(function(a,b){
        return a - b;
        // if (a > b) return 1;
        // if (a < b) return -1;
        // if (a === b) return 0;
    });
    if (answer.length === 0){ 
        answer.push(-1);        
    }
    return answer;
}

