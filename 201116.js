#. 문자열 다루기 기본
>> 문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, 
solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 
1234라면 True를 리턴하면 됩니다.

>> 제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.

>> 입출력 예
s	return
a234	false
1234	true

// 내 답안 ---- 
function solution(s){
    return (s.length === 4 || s.length === 6) && (Number(s) !== NaN); 
    // 'abcd'가 들어갔을경우, !isNaN 이지만 숫자가 아님. 그래서 틀린 출력이 나옴.
}




// 내 틀린 답안들 복기 1
function solution(s) {
    let eva = [];
    eva.push((s.length === 4 || s.length === 6) ? true:false); // 첫번째 조건 확인
    eva.push((isNaN(s)) ? false:true); // 두번째 조건 확인
    let answer = (eva[0] === eva[1] === true) ? true:false; // 둘 다 true 인지 확인
    // 이게 틀림. 이렇게 하면 앞에서 두개씩 검사해서, false === false 이면 true 로 먼저 나오고,
    // 다시 true ==== true 가 되어버림. 

    return answer;
}


// 내 틀린 답안들 복기 1
function solution(s){
    return (s.length === 4 || s.length === 6) && !isNaN(s); 
    // 'abcd'가 들어갔을경우, !isNaN 이지만 숫자가 아님. 그래서 틀린 출력이 나옴.
}



// 내 답안 2 --- 왜 안될까???
function solution(s) {
    let eva = [];
    eva.push((s.length === 4 || s.length === 6) ? true:false);
    eva.push((Number(s) === NaN) ? false:true);
    
    let answer = (eva[0] === eva[1] === true)? true:false;
    return answer;
}



// 다른답안1


// =========== 공부 =========================
* isNaN(n): n에 있는 문자열이 모두 숫자로만 이루어져있는지(false) 아닌지(true)를 불리안으로 반환.

* if 문 ?와 :로 간략하게 쓰기
* 함수 겹쳐쓰기 (push 와 if문)

?? let answer = (Number(s) === NaN) ? false : true; // 얘네는 왜 안될까??