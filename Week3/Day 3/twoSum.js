/* https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the
two numbers such that they add up to a specific target.

You may assume that each input would have EXACTLY ONE SOLUTION,
and you may not use the same element twice.

the array is unsorted, contains no floats, and there may be duplicate values

Given arr = [2, 11, 7, 15], target = 9,
Because arr[0] + arr[2] = 2 + 7 = 9
return [0, 2].

example 1
given: [2, 11, 7, 15]
target: 9
output: [0,2]

example 2
given: [3,2,4]
target: 6
output: [1,2]

example 3
given: [3,3]
target: 6
output: [0,1]

*/

function twoSum(arr, target) {
    for (var x = 0; x<arr.length-1; x++){
        for (var y = 1; y<arr.length; y++){
            if (arr[x]+arr[y] === target){
                return [x,y];
            }
        }
    }
}

console.log(twoSum([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]

// if you finish early -- can you do this without nesting for loops? 
function twoSum(arr,target) {
    var seen = {};
    for (var x = 0; x < arr.length; x++){
        var currentValue = arr[x];
        var delta = target - currentValue;
        if(seen.hasOwnProperty(delta) ){
            return [seen[delta], x]
        }
        seen[currentValue] = x;
    }
}