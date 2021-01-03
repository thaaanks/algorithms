* Day 7
You are given a string s that consists of only lowercase English letters.
If vowels ('a', 'e','i','o' and 'u') are given a value if 1 and consonants are given a value of 2,
return the sum of all of the letters in the input string.

Ex> for s = "abcde", the output should be countVowelConsonant(s) = 8.

Hints>
split()
reduce()

// ⭐오늘 배운 것 ==================================
split() 이미 했음
reduce() 좀더 공부해야할듯
inclues()
// =================================================

// 내 답안
function countVowelConsonant(s){
    const vowels = ['a', 'e','i','o','u'];
    const sToArr = s.split('');
    console.log(sToArr);
    let nums = [];
    for (let i = 0; i<sToArr.length ; i++){
        let a = sToArr[i];
        if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u'){
            nums.push(1);
        } else {
            nums.push(2);
        }
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let answer = nums.reduce(reducer);
    console.log(answer);
    return answer;
}
countVowelConsonant('abcde');



// 출제자 답안 -- 이해안된 부분들이 있음.
function countVowelConsonant(str){
    const vowels = ['a', 'e','i','o','u'];
    const chars = str.split('');
    const total = chars.reduce((acc,char) => {
        if (vowels.includes(char)){
            return acc+1;
        }
        return acc +2;
    },0);

    return total;
}

// reduce 부분, if 뒤에 else없는 부분.