//2021.3.4
//(연습문제) you are starting with the following programming object.
// Using a loop, iterate through the languages array and console.log all of the languages.
// Using a loop, console.log all of the keys in the programming object.
// Using a loop, console.log all of the values in the programming object.
let programming = {
    languages: [“JavaScript”, “Python”, “Ruby”],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
  };



  // 1.this function takes in one parameter (a string) 
  // and returns an object with the keys being the letters and the values being the count of the letter.
  multipleLetterCount(“hello”); // {h:1, e: 1, l: 2, o:1}
  multipleLetterCount(“person”); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

  function multipleLetterCount(string){
    let myObj = new Obj();

  };
  //1-2. Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).
  vowelCount(‘incredible’);
  // {i:2, e: 2}
  vowelCount(‘awesome’);
  // {a:1, e:2, o:1}
  //1-3.Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel 
  //(y should not count as a vowel for this function).
  removeVowels(‘amazing’); // [“m”,“z”,“n”,“g”]
  removeVowels(‘fun’); // [“f”,“n”]
  removeVowels(‘silly’); // [“s”,“l”,“l”,“y”]

  function removeVowels(string){
    let vowel = ["a", "e", "i", "o", "u"];
    let arr = string.split("");
    let a;
    for (let i = 0; i < arr.length; i++){
      a = vowel.indexOf(arr[i]);
      if (a !== -1){
        arr.splice(i, 1);
      } 
    }
    console.log(arr);
    return arr;
    
  }

  removeVowels("hello");

  // 2.A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome
  // (‘a man a plan a canal Panama’) // returns true
  isPalindrome(‘testing’); // false
  isPalindrome(‘tacocat’); // true
  isPalindrome(‘hannah’); // true
  isPalindrome(‘robert’); // false

  //3.https://leetcode.com/problems/middle-of-the-linked-list/
// 876. Middle of the Linked List
// Given a non-empty, singly linked list with head node head, return a middle node of linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Note:

// The number of nodes in the given list will be between 1 and 100. 

  //4.https://leetcode.com/problems/palindrome-linked-list/
//   234. Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:
// [img]
// Input: head = [1,2,2,1]
// Output: true


// Example 2:
// [img]
// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 

// Follow up: Could you do it in O(n) time and O(1) space?

  
  //5 (optional) https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/ 