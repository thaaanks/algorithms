/* Day 9
Given a positive integer Number, 
return the sum of all odd Fibonacci numbers 
that are less than or equal to num. 

The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3 and 5.

Example>
sumOddFibonacciNums(10) should return 10
sumOddFibonacciNums(1000) should return 1785
sumOddFibonacciNums(4000000) should return 4613732
*/

// 내 답안
function sumOddFibonacciNums(int){
    let fiboArray = [1,1];
    let i = 1
    while(fiboArray[fiboArray.length-1]<int){
        let n1 = fiboArray[i-1];
        let n2 = fiboArray[i];
        let n = n1 + n2;
        fiboArray.push(n);
      //   console.log(fiboArray);
        i++;
      //   console.log(i);
    }
    fiboArray.pop();
    let sum = 0;
    for (let j = 0; j<fiboArray.length; j++){
       if(fiboArray[j]%2!==0){
          sum = sum + fiboArray[j];
         //  console.log(sum);
       } else {}
    }
   //  console.log(sum);
    return sum;
}

sumOddFibonacciNums(10);
sumOddFibonacciNums(1000);
sumOddFibonacciNums(4000000);