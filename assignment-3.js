// Question 1
// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// -------------------> Solution <-----------------------

// let threeSumClosest = function(nums, target) {
//     nums.sort((a, b) => a - b); 
//     let closestSum = Infinity;

//     for (let i = 0; i < nums.length - 2; i++) {
//         let l = i + 1, r = nums.length - 1;
//         while (l < r) {
//             const currSum = nums[i] + nums[l] + nums[r];
//             if (currSum === target) {
//                 return target;
//             }
//             if (Math.abs(currSum - target) < Math.abs(closestSum - target)) {
//                 closestSum = currSum;
//             }
//             if (currSum > target) {
//                 r--;
//             } else {
//                 l++;
//             }
//         }
//     }
    
//     return closestSum;
// };


// Question 4
// Given a sorted array of distinct integers and a target value, return the index if the
// target is found. If not, return the index where it would be if it were inserted in
// order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// -------------------> Solution <-----------------------

// let searchInsert = function(nums, target) {
//     let i = 0, j = nums.length - 1;
    
//     while (i <= j) {
//       const mid = Math.floor((i + j) / 2);
      
//       if (nums[mid] === target) {
//         return mid;
//       } else if (nums[mid] < target) {
//         i = mid + 1;
//       } else {
//         j = mid - 1;
//       }
//     }
    
//     return i;
//   };

{/* <aside>
💡 **Question 5**
You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

</aside> */}
  
// -------------------> Solution <-----------------------


// let plusOne = function(digits) {
//     let n = digits.length;
//     for (let i = n - 1; i >= 0; i--) {
//       if (digits[i] < 9) {
//         digits[i]++;
//         return digits;
//       } else {
//         digits[i] = 0;
//       }
//     }
//     digits.unshift(1);
//     return digits;
//   };
  

// Question 6
// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// -------------------> Solution <-----------------------


// const singleNumber = function(nums) {
//     let res = 0;
//     for (let i = 0; i < nums.length; i++) {
//       res ^= nums[i];
//     }
//     return res;
//   };

    