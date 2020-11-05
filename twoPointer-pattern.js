/*
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0. Return an array
 * that includes both the values that sum to zero or undefined if a pair does not exist
 * ex:
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3]) // undefined
 * sumZero([1,2,3]) //undefined
 */

// ** include the necessary steps before coding.
const sumZero = (arr) => {
    let leftPtr = 0;
    let rightPtr = arr.length - 1;

    while (leftPtr < rightPtr) {
        if (arr[leftPtr] + arr[rightPtr] === 0) return [arr[leftPtr], arr[rightPtr]];
        if (arr[leftPtr] + arr[rightPtr] > 0)
            rightPtr--;
        else
            leftPtr++;
    }

    return undefined;
};

//////////////////////////////////////////////////////

/*
 *write a function which accpets a sorted array and counts the unique values in the array.
 *there can be negative numbers in the array, but it will always be sorted. 
 *ex:
 *fn([1,1,1,1,1,1,2]) //2
 *fn([1,2,2,2,3,13,14,14,21]) //6
 *fn([]) //0
 *fn([-2,-1,-1,0,1]) //4
*/
// ** include the necessary steps before coding.
function countUniqueValues(arr) {

    if (arr.length < 1) return 0;

    let slowPtr = 0;
    let fastPtr = 0;
    let count = 1; //at this point there has to be atleast one value

    //we will increment the fastPtr by one always and 
    //keep that fastPtr < arr.length
    while (++fastPtr < arr.length) {
        if (arr[slowPtr] !== arr[fastPtr]) {
            count++;
            slowPtr = fastPtr;
        }
    }
    return count;
}

//////////////////////////////////////////////////////

/*
 * Write a function called averagePair. Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average of the pair equals the
 * target average. There may be more than one pair that matches the average target.
 * ex:
 * averagePair([1,2,3],2.5) // true
 * averagePair([1,3,3,5,6,7,10,12,19],8) //true
 * averagePair([-1,0,3,4,5,6],4.1) //false
 * averagePair([], 4) //false
 */
//will be given an sorted array of integers and from that, I need to find a pair if that pair equals the target average. there could be a multiple pair, but i guess it dont matter as u just return true if you find the first pair
//array of ints
//boolean
//yea, with array int should be able to find the answer. 
// --> could be empty array --> return null

//approach: 
//since its sorted array, i can just use two ptrs one at far left and other at far right. 
//then i'll start to move the right if the sum of left index elem + right index elem > given average
//if sum of left index elem + right index elem < given average then i'll move the left

function averagePair(arr, avg) {
    if (arr.length === 0) return false;

    let leftPtr = 0;
    let rightPtr = arr.length - 1;

    while (leftPtr < rightPtr) {
        let result = (arr[leftPtr] + arr[rightPtr]) / 2;

        if (result === avg) return true;

        if (result > avg)
            rightPtr--;
        else
            leftPtr++;
    }

    return false;
}

//////////////////////////////////////////////////////
/*
 * Write a function called isSubsequence which takes in two strings and checks whether 
 * the characters in the first string form a subsequence of the characters in the second string. 
 * In other words the function should check whether the characters in the first string appear somewhere in the second string, 
 * without their ORDER changing
 * ex:
 * isSubsequence('hello', 'hello world') // true
 * isSubsequence('abc', 'acb') //false      -->order matters
 * isSubsequence('', '') //true 
 * isSubsequence('', 'hello ') //true     --> contains the empty string
 * isSubsequence('', 'hi') //false
 * isSubsequence('abc', 'abracadabra') //true
 */

//so we will be given a function with two strings and our goal is to check if the first string appears somewhere in the second string, without it's order being changed. the first strings letter can appear with order or w/o order
//two strings
//boolean
//yea with given two strings we can find the boolean 
// --> if the str1.len > str2.len --> false
//if either one of them is empty --> false

//how I would approach this problem
//i'll set up two pointer at the first string and just be looping normally on second string
//basically i'll have two pointer at the first string
//ptr1 and ptr2  --> ptr1 be the one step behind 
//while i'm looping at the second string, i want to check if the str2[i] == ptr1, 
//if it is i'll just move ptr1 and ptr2 one step above
//if str2[i] != ptr1 then that's when i'll check if that str[i] === ptr2, if it is you know
//that the letter matched before the first letter, and the order is not correct, so you can return false. 
//and if str2[i] !== ptr1 or str2[i] !== ptr2, then keep incrementing the loop, 
//we can then check if the ptr is at the end of the string1. if not at the end then we know its false, because the 
//the string2 doesnt carry all the letters from the string1.

function isSubsequence(str1, str2) {
    if (str1.length > str2.length) return false;
    if (str1 === " " || str2 === " ") return false;

    let slowPtrStr1 = 0;
    let fastPtrStr1 = slowPtrStr1 + 1;

    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === str1[slowPtrStr1]) {
            slowPtrStr1++;
            fastPtrStr1++;
        } else {
            if (str2[i] === str1[fastPtrStr1]) {
                return false; //letters out of order
            }
        }
    }
    return slowPtrStr1 === str1.length; //we know it's supposed to be at the end somewhere. 
}












