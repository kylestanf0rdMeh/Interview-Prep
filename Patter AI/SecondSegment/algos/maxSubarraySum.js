/**
 * 
  Given an integer array nums, find contiguous subarray 
 (containing @ least 1 #) which has the largest sum & return its sum

 TEST CASE: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 OUTPUT: 6
 REASONING:  [4, -1, 2, 1] has largest sum = 6
 *  
*/

function maxSubArray(nums){
    let maxSoFar = -Infinity
    let currMax = nums[0]

    for(let i = 1; i < nums.length; i++){
        currMax = Math.max(currMax, currMax + nums[i])
        maxSoFar = Math.max(maxSoFar, currMax)
    }

    return maxSoFar
}

// Time Complexity: O(n)