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
    const splitArray = time.split(':');
    console.log(splitArray);
    let answer = 0;
    let one = parseInt(splitArray[0]);
    let two = parseInt(splitArray[1]);
    if (one <= 23 & two <= 59){      
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}

let time = "13:58";
let answer = vaildTime(time);
console.log(answer);

time = "25:51";
answer = vaildTime(time);
console.log(answer);

time = "02:76";
answer = vaildTime(time);
console.log(answer);