let box;
box = Number(prompt("안녕하세요. 이것은 prompt를 이용한 연습입니다.\n가장 좋아하는 숫자를 입력해주세요."));
console.log(box);

let multiple = box*10;
console.log(multiple);

let box2 = Number(prompt("입력하신 수에 10을 곱한 수는 " + multiple + "입니다. \n이 값에서 1을 뺀 수를 입력해주세요."));
let answer;
if (box2 === multiple -1 ){
   answer = "정답입니다.";
}
else {
   answer = "틀렸습니다.";
}
console.log(answer);

let box3 = Number(prompt(answer + "\n다시 하시겠습니까? 다시 하시려면 1, 그만 하시려면 2를 입력해주세요."));

if (box3 !== 1 & box3 !== 2){
    Number(prompt("잘못 입력하셨습니다. 다시 하시겠습니까? 다시 하시려면 1, 그만 하시려면 2를 입력해주세요."));
}
else if (box3 === 2){
    prompt("안녕히 가세요.");
}
else {
   prompt("더 하고 싶으시겠지만 오늘은 그만합시다 ^^");
}

