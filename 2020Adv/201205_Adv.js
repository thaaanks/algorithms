* Day 5
Reverse the provided string.
You may need to turn the string into an array before you can reverse it. 
Your result must be a string. 

ex>
reverseAString("hello") returns 'olleh';
reverseAString("Howdy") returns 'ydwoH';

Hints>
join()
split()
reverse() 
*/

// ⭐오늘 배운 것 ==================================
// split() https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split
//    ㄴ문자열 나눠서 배열로 만드는 함수. 
//    ㄴ ()안의 것에 따라 나누는 기준 설정.
//          ㄴ ('') 스펠링 하나씩, (' ') 공백(스페이스)마다, ('@') @마다??
//          ㄴ () 아무것도 안나누니까 => 스트링 전체를 하나의 요소로 가지는 배열.
//    ㄴ (separator, limit) limit에는 몇번까지만 나누어 배열에 넣는지를 보여준다.
//    ㄴ 주의!! 문자열뒤집기에 효과적이지 않다고 나옴!! 이유는 위 링크에서 확인!!???
// 
// join() https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//    ㄴ 배열의 요소를 연결해 하나의 문자열로 만들어서 return하는 함수.
//       이 때 배열요소가 문자열로 변환된 다음 하나의 문자열로 연결된다.
//    ㄴ ()안의 것에 따라 연결고리를 결정.
//          ㄴ () 요소들 사이사이를 ,로 연결.
//          ㄴ ('') 연결고리없이 그냥 다붙여서 연결
//          ㄴ ('-') -로 연결
//    ㄴ 만약 요소기 undefined이거나 null 이면 빈 문자열로 변환.
// 
// reverse()  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
//    ㄴ 배열의 순서를 반전하는 함수.
//    ㄴ 주의!! 원본배열을 변경시켜버림. destructive
// =================================================

// 내 답안
function reverseAString(text){
    let textArr = text.split('');
    let reversedTextArr = textArr.reverse();
    let answer = reversedTextArr.join('');
    console.log(answer);
    return answer;
}

function reverseAStringShortVer(text){
    let answer = text.split('').reverse().join('');
    return answer;
}

reverseAString("hello");
reverseAString("Howdy");

// 출제자 답안
function reverseAString(str){
    // return str.split('').reverse().join('');
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}
// 여러 iteration대신 한번의 iteration만 하면 되도록.

