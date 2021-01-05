


#. 완주하지 못한 선수
>> 문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

>> 제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

>> 입출력 예
participant                                 	completion      	                        return
[leo, kiki, eden]	                        [eden, kiki]	                                   leo
[marina, josipa, nikola, vinko, filipa] 	[josipa, filipa, marina, nikola]	               vinko
[mislav, stanko, mislav, ana]	            [stanko, ana, mislav]	                           mislav

>> 입출력 예 설명
예제 #1
leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

// 나중에 https://hianna.tistory.com/403 참고해보자

function solution(participant, completion) {
    let participantArr = [];
    let completionArr = [];
    for (let i= 0; i<completion.length+1; i++){
        if completion[i]
        participant.splice()
    }
    
    
    
    var answer = '';
    return answer;
}





#. 소수 찾기
>> 문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, 
solution을 만들어 보세요.
소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

>> 제한 조건
n은 2이상 1000000이하의 자연수입니다.
입출력 예
n	result
10	4
5	3

>> 입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환



function solution (n){
    let firstArr = [];
    firstArr = function firstArray(){
        for (let i=2; i<5+1; i++){
            firstArr.push(i);
        }
    }
    firstArray();
    console.log(firstArr);
    // for (let )

    // firstArray.splice(removeNs);

    // if n%1 !=== 
}







#. 모의고사
>> 문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

>> 제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

>> 입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]
>>입출력 예 설명
.입출력 예 #1
수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

.입출력 예 #2
모든 사람이 2문제씩을 맞췄습니다.

function solution(answers){

    // 세 사람의 답안배열
    let n = answers.length;
    let a = new Array(n);
    let b = new Array(n);
    let c = new Array(n);
    
    for (let i = 0; i < n; i++){ a[i] = i%5 + 1 ;}
    for (let i = 0; i < n; i++){
            
            if (i%7 === 1) { b[i] = 1;}
            if (i%7 === 3) { b[i] = 3;}
            if (i%7 === 5) { b[i] = 4;}
            if (i%7 === 0) { b[i] = 5;}
            if (i%2 === 0) { b[i] = 2;}
    }
    for (let i = 0; i < n; i++){
            if (i%10 === 0 || i%10 === 1) { c[i] = 3;}
            if (i%10 === 2 || i%10 === 3) { c[i] = 1;}
            if (i%10 === 4 || i%10 === 5) { c[i] = 2;}
            if (i%10 === 6 || i%10 === 7) { c[i] = 4;}
            if (i%10 === 8 || i%10 === 9) { c[i] = 5;}
    }


    // 세사람의 답안과 정답을 비교, 맞는 번호만 모은 배열 생성.
    let compareA = [];
    let compareB = [];
    let compareC = [];
    for (let i=0; i < n; i++){
        if (answers[i] === a[i]){ compareA.push(i+1); }}
    for (let i=0; i < n; i++){ 
        if (answers[i] === b[i]){ compareB.push(i+1); }}
    for (let i=0; i < n; i++){
        if (answers[i] === c[i]){ compareC.push(i+1); }}
    


    // 최고득점자 찾기
    let answer = [compareA.length, compareB.length,compareC.length];
 
    // let winner = [1,2,3];

    // if (compareA.length > compareB.length) { winner.splice([1],1); }
    // if (compareA.length < compareB.length) { winner.splice([0],1); }
    // if (compareA.length > compareC.length) { winner.splice([2],1); }
    // if (compareA.length < compareC.length) { winner.splice([0],1); }
    // if (compareB.length > compareC.length) { winner.splice([2],1); }
    // if (compareB.length < compareC.length) { winner.splice([0],1); }
    // //console.log(winner);
    // return winner;
}

solution([1,2,3,4,5]);










>> 문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

>> 제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

>> 입출력 예
a	b	result
5	24	TUE


function solution(a, b) {
    var answer = '';
    return answer;
}




>> 문제 설명
게임개발자인 죠르디는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
죠르디는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.

crane_game_101.png
게임 화면은 1 x 1 크기의 칸들로 이루어진 N x N 크기의 정사각 격자이며 
위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다. (위 그림은 5 x 5 크기의 예시입니다). 
각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 
모든 인형은 1 x 1 크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다. 
게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다. 
집어 올린 인형은 바구니에 쌓이게 되는데, 
이 때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다. 
다음 그림은 [1번, 5번, 3번] 위치에서 순서대로 인형을 집어 올려 바구니에 담은 모습입니다.

crane_game_102.png
만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 
두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다. 
위 상태에서 이어서 [5번] 위치에서 인형을 집어 바구니에 쌓으면 
같은 모양 인형 두 개가 없어집니다.

crane_game_103.gif
크레인 작동 시 인형이 집어지지 않는 경우는 없으나 
만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다. 
또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다. 
(그림에서는 화면표시 제약으로 5칸만으로 표현하였음)

게임 화면의 격자의 상태가 담긴 2차원 배열 board와 
인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 
크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

>> 제한사항
board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.
board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
0은 빈 칸을 나타냅니다.
1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
moves 배열의 크기는 1 이상 1,000 이하입니다.
moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.

>> 입출력 예
board	moves	result
[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4
>> 입출력 예에 대한 설명
입출력 예 #1
인형의 처음 상태는 문제에 주어진 예시와 같습니다. 
크레인이 [1, 5, 3, 5, 1, 2, 1, 4] 번 위치에서 차례대로 인형을 집어서 바구니에 옮겨 담은 후, 
상태는 아래 그림과 같으며 바구니에 담는 과정에서 터트려져 사라진 인형은 4개 입니다.


function solution(board, moves) {
    var answer = 0;
    return answer;
}



