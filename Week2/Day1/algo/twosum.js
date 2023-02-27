var twoSum = function(nums, target) {
    var sum = 0;
    var pair = [];
    for (var i = 0; i < nums.length; i++) {
        sum = nums[i];
        if (nums[i] + nums[i+1] === target) {
            pair.push(i,i+1);
        }
    }
    return pair;
};

console.log(twoSum([2,7,11,15],9))