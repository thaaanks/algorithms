#. 정수 내림차순으로 배치하기
>> 문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

>> 제한 조건
n은 1이상 8000000000 이하인 자연수입니다.
>> 입출력 예
n	return
118372	873211

// 내 답안
function solution(n) {
    var answer = 0;
    // answer = Number(String(n).split("").sort(function(a,b){return b-a}));  
    // 한줄로 해보려했으나 안되네.
    
    let nString = String(n);
    let nArray = nString.split("");
    nArray = nArray.sort(function(a,b){return b-a});
    answer = Number(nArray.join(''));

    return answer;
}



// 다른답안 1
function solution(n) {
    const newN = n + "";
    const newArr = newN
      .split("")
      .sort()
      .reverse()
      .join("");
  
    return +newArr; //+를 통해 문자열을 숫자로 변환
    // 참조: https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript
  }

  // 다른답안2
function solution(n) {
    // 문자풀이
    return parseInt((n+"").split("").sort().reverse().join(""));
}


// 다른답안 3 .... 나중에 다시 보자. 이해가 잘 안됨
function solution(n) {
    // 문자풀이
    // return parseInt((n+"").split("").sort().reverse().join(""));

    // 숫자풀이
    var r = 0, e = 0, arr = [];

    do {
        e = n%10;

        // 정렬
        if (arr.length == 0) arr.push(e);
        else for (var i=0, len=arr.length; i<len; i++) {
            if (arr[i] <= e) { arr.splice(i,0,e); break; }
            if (i == len-1) arr.push(e);
        }
    } while (n = Math.floor(n/10), n>0);

    return parseInt(arr.join(""));
}