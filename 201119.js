#. 서울에서 김서방 찾기

>> 문제 설명
String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 
김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. 
seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

>> 제한 사항
seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
Kim은 반드시 seoul 안에 포함되어 있습니다.

>> 입출력 예
seoul	        return
[Jane, Kim]	    김서방은 1에 있다

// 내 답안 -- 충분히 괜찮은 듯. 
function solution(seoul) {
    let idx = seoul.indexOf("Kim");
    // console.log(idx);
    let answer = `김서방은 ${idx}에 있다`;
    // console.log(answer);
    return answer;
}


// 내 답안과 거으 같은 다른답안. 차이있는 retrun부분 참조.
function findKim(seoul){
    var idx = seoul.indexOf('Kim');
    return "김서방은 " + idx + "에 있다";
  }


// 다른답안1
const solution = (arr) => `김서방은 ${arr.findIndex(s => s === 'Kim')}에 있다`;

// 다른답안2
function findKim(seoul) {
    return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
}