#. 핸드폰 번호 가리기
>> 문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 
고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 
전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 
리턴하는 함수, solution을 완성해주세요.

>> 제한 조건
s는 길이 4 이상, 20이하인 문자열입니다.

>> 입출력 예
phone_number	return
01033334444	*******4444
027778888	*****8888


// 내 답안
function solution (phone_number){
    let answer = 0;
    let pn = phone_number;
    let pnArray = pn.split(''); // 문자열을 배열로

    for (let i = 0; i < pn.length-4; i++){
        pnArray[i] = '*';
    }
    answer = pnArray.join(''); // 배열을 문자로
    return answer;
}



// 다른답안1 - 정규식이용.
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
  }
  
console.log("결과 : " + hide_numbers('01033334444'));


// 다른답안2 - 정석대로
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    
    return result;
  }






// =========== 공부 ===================  

* 문자열을 배열로 나누기
let myArray = myString.split(''); 
이 때 ()안에 , - : / 등을 넣어서 그걸 기준으로 문자열을 나눌 수도 있다. (''를 넣으면 각 낱자로 나누는 것.)

let myStr = "02-123-4567";
let myArray = myStr.split('-'); 이면,
myArray = [02, 123, 4567] 이 된다.


* 배열을 문자열로 합치기
myString = myArray.join('');
마찬가지로 ()안에 , - : / 등을 넣어서 그걸로 각 배열요소를 이어줄 수도 있다. (''를 넣으면 이음새없이 붙이는 셈.)

let myArray = [02, 123, 4567];
let myString = myArray.join('-'); 이면,
myString = "02-123-4567"이 된다.



* 문자열의 마지막 자리를 가져오는 4가지 방법
let str = "어쩌고저쩌고" 일때,

1. charAt(i): 원하는 i인덱스의 문자를 확인. 
             ex. 첫문자: str.charAt(0); 끝문자: str.charAt(str.length-1))

2. substr(start, length): start인덱스 부터, length길이만큼의 문자열을 잘라서 반환.
             str.substr(start, length); ex. 첫문자: str.substr(0,1); 끝문자: str.substr(str.length-1,1)

3. substring(start, end): start인덱스부터, end인덱스'전'까지의 문자열을 잘라서 반환.
             str.substring(start, end); ex. 첫문자: str.substring(0,1); 끝문자: str.substring(str.length-1, str.length)

4. slice () 3과 거의 같지만, start 와 end의 관계에 따라 달라짐. https://hianna.tistory.com/340
             string.slice(start, end); ex. 첫문자: str.slice(0,1); 끝문자: str.slice(str.length-1, str.length)



* 문자열 반복 함수 repeat
let a = '*'.repeat(5); 
출력: '*****'


* 문자열에는 push를 쓸 수 없다.