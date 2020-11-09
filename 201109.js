#. 가운데 글자 가져오기
>> 문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

>> 제한사항
s는 길이가 1 이상, 100이하인 스트링입니다.

>> 입출력 예
  s   return
abcde	c
qwer	we

// 내 답안
function solution(s){
    var answer = '';
    if (s.length%2 === 0) {
        answer = s[s.length/2-1] + s[s.length/2];
        console.log(answer);
        return answer;
    } 
    else {
        answer = s[parseInt(s.length/2)];
        console.log(answer);
        return answer;
    }
}


// 모범답안 1
function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}


// 모범답안 2
const solution = s => {
    return s.length % 2 ? 
        s[parseInt(s.length/2)] :
        s.substr(s.length/2-1, 2);
}
//이거 아직 이해가 잘 안됨.






// #. 수박수박수박수박수박수?
// >> 문제 설명
// 길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
// 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

// >> 제한 조건
// n은 길이 10,000 이하인 자연수입니다.

// >>입출력 예
// n	return
// 3	수박수
// 4	수박수박


// 내 답안
function solution(n){
    var arr = new Array(n);
    for (let i=0; i < arr.length; i++){
        if (i%2 === 0){
            arr[i] = '수';
        }
        else {
            arr[i] = '박';
        }
    }
    //console.log(arr);
    var answer = arr.join('');
    return answer;
}

