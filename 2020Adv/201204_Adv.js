/* Day 4
Given a year, return the century it is in.
The first century spans from the year 1 up to 
and including the year 100,
the second - from the year 101 up to
and including the year 200, etc.

Ex>
for year = 1905, the output should be centuryFromYear(year) = 20;
for year = 1700, the output should be centuryFromYear(year) = 17;

Hints>
Math.floor()
*/

// ⭐오늘 배운 것 ==================================
// Math.floor() 내림
// Math.ceil() 올림  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
//      Math.ceil(-0.95);  // -0 한 단계 큰 수 인셈..!!
//      Math.ceil(-4);     // -4
//      Math.ceil(-7.004); // -7
// =================================================

// 내 답안
function centuryFromYear(year){
    const century = Math.ceil(year/100);
    console.log(century);
    return century;
}

centuryFromYear(1905);
centuryFromYear(1700);



// 출제자 답안 - 근데 내 답안이 더 나은거 같은데...
function centuryFromYear(year){
    const century = year/100;
    if (year % 100 === 0){
        return century;
    }

    return Math.floor(century) + 1;
}