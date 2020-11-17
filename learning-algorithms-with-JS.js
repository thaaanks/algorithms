/* Data Structures and Algorithms in JavaScript - Full Course for Beginners
    from https://youtu.be/t2CEgPsws3U */



/* Stacks! */
functions: push, pop, peek, length

스택stack: 쌓아올린 책무더기처럼 위에다 하나하나 쌓아올리는 것. 
          그래서, 마지막 것이 맨 위에(첫번째로).

stack에서 제공하는 function들:
     push: stack에 데이터 넣는것
     pop: stack에서 맨 위에 있는 요소를 제거
     peek: stack 맨 위의 요소를 표시하는 것
     length(or size): stack에 있는 요소의 수

.. 배열array은 스택의 모든 function들을 가지고 있다. 
즉, 배열을 stack처럼 사용할 수 있다.


// 예시 1
var letters = []; // this is our stack
var word = "racecar"
var rword = "";   // variable with empty string, which means "reverse word"

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}
// 즉, 변수 word의 첫번째 문자부터 하나씩을, 배열변수 letters 에다가 넣어라.

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}
// 위에서 letters에 있는 애들 중 맨 마지막애 부터 변수 rword 에 넣어라. ????? += 이해하기

// check if it is a palindrome
if (rword === word){
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}


// 예시 2
// Creates a stack
var Stack = function(){ // 빈 스택을 만들거야. 일단 두개의 변수를 만들자:
    this.count = 0;     // 변수1 : stack안에 몇개의 item이 있는지를 세게 할 것
    this.storage = {};  // 변수2: 빈 오브젝트
}

// Adds a value onto the end of the stack
this.push = function(value){
    this.storage[this.count] = value;  // value값을 받으면, 아까 빈 변수2 스택의 인덱스 값에 맞게 넣고
    this.count++;                      // 변수1의 값을 하나씩 증가시키자.
}

// Removes and returns the value at the end of the stack
this.pop = function(){
    if(this.count === 0){
        return undefined;
    }

}