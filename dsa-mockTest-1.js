// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// ------------------------> Solution-1 <-----------------------

// var moveZeroes = function(nums) {
//     let j = 0;
//     let i = 0;
    
//     while (i < nums.length) {
//         if (nums[i] !== 0) {
//             nums[j] = nums[i];
//             j++;
//         }
//         i++;
//     }
    
//     while (j < nums.length) {
//         nums[j] = 0;
//         j++;
//     }
// };

//******************************************************************************************** */


// First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// ------------------------> Solution-2 <-----------------------

// const firstUniqChar = function(s) {
//     const count = {};
    
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         count[char] = count[char] ? count[char] + 1 : 1;
//     }
    
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if (count[char] === 1) {
//             return i;
//         }
//     }
    
//     return -1;
// };
