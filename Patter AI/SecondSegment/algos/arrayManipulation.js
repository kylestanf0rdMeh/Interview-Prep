/**
 * PROBLEM: Starting with an array of n zeros and a list of operations, 
 * for each operation add a value k to all the elements between 
 * indices a and b (inclusive). After all operations, 
 * find the maximum value in the array.
 * 
 * TEST CASE: 
 * Input 1:
    5 3
    1 2 100
    2 5 100
    3 4 100

   Output 1: 200
 */


function arrayManipulation(n, queries) {
    // Create an array to store differences
    const arr = new Array(n + 2).fill(0);
    
    // Process each query using difference array technique
    for (let [a, b, k] of queries) {
        // Add k at start index
        arr[a] += k;
        // Subtract k at position after end index
        arr[b + 1] -= k;
    }
    
    // Track maximum value and current sum
    let maxVal = 0;
    let currentSum = 0;
    
    // Calculate prefix sums to get final array values
    for (let i = 1; i <= n; i++) {
        currentSum += arr[i];
        maxVal = Math.max(maxVal, currentSum);
    }
    
    return maxVal;
}