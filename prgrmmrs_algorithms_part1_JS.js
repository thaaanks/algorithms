
!!! 프로그래머스 강의 중 "알고리즘 문제해설"을 연습/복습 하는 곳입니다.
!!! 아직 초보이고 무턱대고 혼자 풀어보는 중이라 답안은 많이 서툽니다.
!!! 본 강의는 https://programmers.co.kr/learn/courses/18 에 있습니다.



---------------------------------------------------------------
문제1: 자릿수 더하기 Sum of digits

* 문제 설명
    자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
    예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
* 제한사항
    N의 범위 : 100,000,000 이하의 자연수
* 입출력 예
    N = 123, answer = 6
    N = 987, answer 24
-----------------------------------------------------------------

무턱대고 풀어본 답1:

function solution(n)
{
    var answer = 0;
    var a = parseInt(n/100);
    var b = parseInt((n-100*a)/10);
    // var c = parseInt((n-100*a-10*b)/1);
    var c = n-100*a-10*b 
    var answer = a+b+c;

    console.log(answer);
    return answer;
}
문제점: 주어진 예시값만 만족, 네자리, 다섯자리.. 등의 경우에 대한 부분이 빠짐.
로그값으로 몇 자릿수digit number인지를 계산한뒤, 그 갯수만큼 반복하면 되긴 하겠다만.



