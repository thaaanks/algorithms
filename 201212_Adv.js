* Day 12
Check if the given string is a correct time representation of the 24-hour clock. 


Example> 
for time = "13:58", the output should be vaildTime(time) = true;
for time = "25:51", the output should be vaildTime(time) = false;
for time = "02:76", the output should be vaildTime(time) = false;

Hints>
parseInt()
split()

// ⭐오늘 배운 것 ==================================
// split()  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split
// 
// =================================================


// 내 답안
function vaildTime(time){
    const splitArray = time.split(:);
    console.log(splitArray);
    const answer = true;
    if (splitArray[0] <= 24 || splitArray[1]  <= 59){
        console.log(answer);
        return answer = true;
    } else {
        console.log(answer);
        return answer = false;
    }
}
let time = "13:58"
vaildTime(time);
let time = "25:51"
vaildTime(time);
02:76
let time = "25:51"
vaildTime(time);