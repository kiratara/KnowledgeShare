/*
Write a function called maxConsecutiveSum which accpets an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.

maxConsecutiveSum([1, 2, 5, 5, 10, 5, 6, 7], 3)) //20
maxConsecutiveSum([1, 2, 5, 5, 10, 5, 6, 7], 1)) //10
maxConsecutiveSum([1, 2, 5, 5, 10, 5, 6, 7], 0)) //null
*/

// naive version:
// each numbers are added everytime.

function maxConsecutiveSum(arr, n) {
    if (arr.lenght < n) {
        return "error";
    }

    let sum = 0;
    let max = -Infinity;  //accounts for the sum if the number are all negative

    for (let i = 0; i < (arr.length - n) + 1; i++) {
        sum = arr[i];
        for (let j = i + 1; j < (i + n); j++) {
            sum += arr[j];
        }
        max = Math.max(sum, max); //finds the biggest sum 
    }

    return max;
}

// sliding window technique
// first n numbers are added already then the way to add next numbers
// would be to just subtract the beginning number from the sum that is found by adding
// the number j corresponds to
function maxConsecutiveSum(arr, n) {
    if (arr.length < n) return 'error';

    let sum = 0;
    let max = -Infinity;
    //first loop to just add the first n numbers so that
    //i can subtract the beginning number as i go on
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    max = sum;
    //second loop will 
    //we will have it start at the second index and have the fast pointer be at n place
    let fast = 0;
    for (let slow = 1; slow < (arr.length - n) + 1; slow++) {
        fast = slow + n - 1 // so that fast will always be n steps ahead of slow

        //adding the element fast is at,
        //then subtracting the previous initial value from that window
        sum = arr[fast] + sum - arr[slow - 1];
        max = Math.max(max, sum);
    }

    return max;
}
