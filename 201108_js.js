/*<문자열에서 숫자인것 숫자가 아닌것 구분하기>
ee4jjJ6FSWFpxnKj2zbq 와 같은 문자열이 있습니다.
JS를 이용해서 이 문자열에서 숫자만남기고 모두 지워주세요.*/

function solution(input){
   
   let inputArray = new Array();
   let answerArray= new Array();

   inputArray = input.split("");
   console.log(inputArray);
   console.log(inputArray.length);

   eval = ["0","1","2","3","4","5","6","7","8","9"];
   for (let i=0; i < inputArray.length; i++){
      if (eval.indexOf(inputArray[i]) !== -1){
         answerArray.push(inputArray[i]);
         console.log(answerArray);
      } 
      else {
         console.log("it is string.");
      }
   }
   let answer = answerArray.join('');
   console.log(answer);
   return answer;
}
solution("ee4jjJ6FSWFpxnKj2zbq");

// 답은 맞다는데, 반복문이 계속 도는 듯. 어디가 문제지?