
// 💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]


// solution
// function findNum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
//     return 0
// }
// const res = findNum([2, 6, 11, 3, 15], 26)
// console.log(res);


// **********************************************************************

{/*
💡 **Q2.** Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

**Example :**
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_*,_*]

**Explanation:** Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)[ */}

// Solution

// function removeOccurance(nums, val) {
//     let i = 0, j = nums.length - 1, temp, count = 0, l = nums.length
//     while (i < j) {
//         if (nums[j] === val) {
//             count++
//             j--;
//             continue;
//         }
//         if (nums[i] === val) {
//             temp = nums[j]
//             nums[j] = nums[i]
//             nums[i] = temp
//             count++
//             i++;
//             j--;
//         }
//         else {
//             i++
//         }
//     }
//     return l - count
// }
// const res = removeOccurance([3, 3, 2, 3, 2, 3], 2)
// console.log(res);


// **************************************************************************
{/* <aside>
💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

</aside> */}

// function findIndex(nums, target) {
//     let i = 0, j = nums.length - 1, flag = 0
//     let mid = Math.floor((i + j) / 2)
//     while (i <= j) {
//         if (target === nums[mid]) {
//             return mid
//         }
//         else if (target > nums[mid]) {
//             i = mid++
//         }
//         else if (target < nums[mid]) {
//             j = mid--
//         }
//     }
  
// }

// const res = findIndex([1, 3, 5, 6, 25, 75, 86], 25)
// console.log(res);

