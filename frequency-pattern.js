/*
Write a function called same which accepts two arrays
and the function should return true if every value
in the array has its corresponding value squared.In the second array.

same([1, 2, 3], [1, 4, 9]) //true
same([1, 2, 3], [1, 9]) //false
same([1,2,1], [4,4,1]) //false (must be same frequency)
*/

// reword: so basically we will be given two array input and we need to check if the second array contains the
// the output which is squared from the first array input at least once.

// input: given two array inputs

// output: return a boolean

// dont worry about anything else
// we have enough example to start

const same = (arr1, arr2) => {

    let secondArrObjStorage = {};

    //loop through the second one to store it in the object
    //value of the key will be its count
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] in secondArrObjStorage) {
            secondArrObjStorage[arr2[i]] += 1;
        }
        else {
            secondArrObjStorage[arr2[i]] = 1;
        }
        secondArrObjStorage[arr2[i]] = (secondArrObjStorage[arr2[i]] || 0) + 1;
    }

    //loop through the first one to see if the squared value exists
    for (let i = 0; i < arr1.length; i++) {
        let double = Math.pow(arr1[i], 2)
        if (double in secondArrObjStorage && secondArrObjStorage[double] != 0) {
            secondArrObjStorage[double] -= 1;
        }
        else {
            return false;
        }
    }
    return true;
};

same([1, 2, 3], [1, 4, 9]) //true
same([1, 2, 3], [1, 9]) //false
console.log(same([1, 2, 1], [4, 4, 1])) //false (must be same frequency)

console.log(same([1, 2, 3, 2], [9, 4, 1, 4])) //return true




//********************************************************************** */
/*
 Given two strings, write a function to determine if the second string is an anagram of the first.
 An anagram is a word, formed by rearranging the letters of another, such as cinema, formed from iceman.
 
 validAnagram('', '') //true
 validAnagram('aaz', 'zza') //false
 validAnagram('anagram', 'nagaram') //true
 validAnagram('rat', 'car') //false
 validAnagram('awesome', 'awesom') //false
 */


//reword: basically checking if the given strings are the same, no matter the arrangements

//inputs: two strings

//output: boolean t/f

//edge case: strings passed in are all lowercase, no spaces and only valid
//strings are passed in
//what if the first and second string length dont match?

//approach: 
//i will try to make one obj/dictionary, where I will be storing the letters of the first string
//if more than one same letter increment the count. 
//then I will loop through the second string to check if the letters are present in the obj/dict
//if present, I will subtract the letter count. 

function validAnagram(str1, str2) {

    if (str1.length !== str2.length) return false;  //edge case
    let storeString1 = {};

    //adding the letter in the dict
    for (let char of str1) {
        storeString1[char] = (storeString1[char] || 0) + 1;
    }

    //checking to see if the all the letters match
    for (let char of str2) {
        if (char in storeString1 && storeString1[char] > 0) {
            storeString1[char] -= 1;
        }
        else {
            return false;
        }
    }
    return true;
}

//////////////////////////////////////////////////////////////////////////////
/*
Write a function where given two positive integers, find out if the two numbers have the same frequency of digits.
sameFrequency(182, 281) //true
sameFrequency(31, 14)  //false
sameFrequency(22, 222) //false

 */
//Problem solving checklist: 
//reword: go in a given array of +ve integers we need to find if the two numbers have same frequency --> like arrangements can be not exactly the same
//input: two +ve integers
//output: boolean
//edge cases: 
// if it's only integers we can find the answer but
//if it's something other than string --> null
//also if one's number placement is larger than we know --> false
//also if not an 'int' we know --> false


//How I'd solve this problem: 
//since most frequency counter problem involve dict/obj
//I'll loop through the first set of number and store that in obj
//         if double the same number i'll start incrementing
//second time around, I'll loop at the second set of numbers and see
//if it exists or not and i'll start decrementing the number count
//i'll do floor division to loop individual number. 


function sameFrequency(num1, num2) {

    if (!num1 || !num2) return null;
    if (!(typeof num1 === 'number' || typeof num2 === 'number')) return null;

    let storage = {};
    //first loop till its not 0
    //basically cutting the number from the right side
    while (num1) {

        let lastNum = num1 % 10;  //last number
        storage[lastNum] = (storage[lastNum] || 0) + 1;
        num1 = Math.floor(num1 / 10);  //remaining numbers
    }

    //same thing cutting the number from the right side
    //and then I'll check
    while (num2) {
        let lastNum = num2 % 10;
        num2 = Math.floor(num2 / 10);
        if (lastNum in storage && storage[lastNum] !== 0) {
            storage[lastNum]--;
        } else {
            return false;
        }
    }
    return true;
}


////////////////////////////////////////////////////////////////////////////

/**
 * 
 * implement a function which accepts a variable number of arguments, and checks whether there are any duplicates among the 
 * arguments passed in . 
 * areThereDuplicates(1,2,3) //false
 * areThereDuplicates(1,2,2) //true
 * areThereDuplicates('a','b','c','a') //true
 */
//problem solving steps
//1: so basically will be given bunch of arguments, where I'll have to find if there's any duplicate arguments. Arguments are not an array, just like many parameters
//2: input: bunch of arguments
//3: output: boolean
//4: yea with given input we should be able to find the answer
//      different scenario: can numbers, string, array be mixed as in passed in at the same time? 

//initially i was thinking of using set. and storing the values of set
//then comparing the length of arguments and set length
//but this can also be acheived with dictionary? 

//
function areThereDuplicates(...argument) {
    let arr = [...argument];

    let store = {};
    for (let elem of arr) {
        if (elem in store) {
            return true;
        }
        store[elem] = (store[elem] || 0) + 1;
    }

    return false;
}
areThereDuplicates(1, 2, 3);