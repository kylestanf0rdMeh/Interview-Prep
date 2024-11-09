function maxSubarraySum(arr, num){
    if(num > arr.length){
        return null
    }

    let maxSum = 0;
    let tempSum = 0;

    //Intialize window
    for(let i = 0; i < num; i++){
        maxSum += arr[i]
    }

    tempSum = maxSum;

    // slide over the window array
    for(let i = num; i < arr.length; i++){
        // To be axact, both the intialization of i to num AND the below arr[i - num] causes us to 'slide' over the values in a set window
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 3;
const maxSum = maxSubarraySum(arr, num);
console.log(maxSum); // output: 24