>> 문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

>> 제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

>> 입출력 예
arr	return
[4,3,2,1]	[4,3,2]
[10]	[-1]

// 내 답안
function solution(arr) {
    if (arr.length === 1){
        let answer = [-1];
        console.log(answer);
        return answer;
    } else {
        let min = Math.min.apply(null, arr);
        arr.splice(arr.indexOf(min),1);
        let answer = arr;
        console.log(answer);
        return answer;
    }
}


// 다른이의 좋은 답안
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}

// 다른이의 답안
function solution(arr) {
    if (arr.length > 1) {
        var minNum = Math.min(...arr);
        var idx = arr.indexOf(minNum);
        arr.splice(idx, 1);
    } else {
        arr = [-1];
    }
    return arr;
}





// 틀렸던 내 답안 - remove에서 오류
function solution(arr) {
    if (arr.length === 1){
        let answer = [-1];
        console.log(answer);
        return answer;
    } else {
    arr.remove(Math.min.apply(null, arr));
    let answer = arr;
    console.log(answer);
    return answer;
    }
}





최대최소값 찾기
Math.min.apply(null, 배열); // 최소값 찾기
Math.max.apply(null, 배열); // 최대값 찾기


배열arr에서 요소제거
arr.remove
arr.splice