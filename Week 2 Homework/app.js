                // Week2_HW2_Functions


// 1) Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function maxOfTwoNumbers(y, j) {
    if (y > j) {
        return y;
    } else {
      return j;
    }
}

console.log(maxOfTwoNumbers(30,333));


// 2) Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function max(num1, num2, num3)
{
    return Math.max(num1, num2, num3);
}
console.log(max(3,866,122));


/*3) Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) 
and returns true if it is a vowel, false otherwise.*/

function isCharacterAVowel (character){
  // isCharacterAVowel is the name of the function.
  // Character is the parameter.

  let vowelOrConsonant = ['a','e', 'i','o','u'];
    if (vowelOrConsonant.includes(character)){
    console.log('True')
    }
    else {
   console.log ('False');
    }
}
// 
   isCharacterAVowel('e');      



  //  practice

// function vowelOrConsonant(y)
// {
//     if (y === 'a' || y === 'e' || y === 'i' ||
//         y === 'o' || y === 'u' || y === 'A' ||
//         y === 'E' || y === 'I' || y === 'O' || y === 'U')
//         return ("Vowel");
//     else
//         return ("Consonant");
// }
 
// console.log(vowelOrConsonant('e'));



/* (4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an
 array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.*/ 


const arrayNum = [12, 2, 1, 6, 2, 3];

let addNum = 0; // this is the variable for the sum

let p = 1; // this is the variable for the product

let i; // i can be anything

for (i = 0; i < arrayNum.length; i += 1)  // (let i = 0)--- variable is set before loop begin, A
   {
    addNum += arrayNum[i];
    
    p *= arrayNum[i];
    }
console.log(`The Sum Is : ${addNum} The Product Is :  ${p}`);  // This is interpolation of the sum and the product.


// 5) Write a function that returns the number of arguments passed to the function when called.


function numArgs() { 
  return arguments.length; // I am telling the function to retun the arguments for the length of the array
} 
console.log(numArgs(2,3,4,5,15,9)); //I am telling it to log the number of arguments in the array



/* 6) Define a function reverseString that computes the reversal of a string.
 For example, reverseString("jag testar") should return the string "ratset gaj".*/

 function reverseWords(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {  // str.length is string length which is 10
      newString += str[i];
  }
  return newString;
}
console.log(reverseWords("I Love Sushi"));


// function reverse(str) {
//     var text = '';
    
//     for (var i = str.length - 1; i >=0; i--) {
//     	text += str[i];
//     	continue
//     }
//     return(str);
// }
// console.log(reverse("jag testar"));


// function reverseString(str) {
//   return str;
// }
// console.log(reverseString ("jag testar"));

/*7) Write a function findLongestWord that takes an array of words and returns
 the length of the longest one.*/
 
// 


/*8)Write a function filterLongWords that takes an array of words and a number i and returns 
the array of words that are longer than i characters long.*/

// idk
