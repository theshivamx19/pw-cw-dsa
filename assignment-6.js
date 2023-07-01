{/* <aside>
💡 **Question 2**

You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.

**Example 1:**

![Screenshot 2023-05-29 005303.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4b0271f-15f0-4744-826b-18500ccfcb75/Screenshot_2023-05-29_005303.png)

**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

**Output:** true

</aside> */}

// --------------------->Solution<---------------------

// const searchMatrix = function(matrix, target) {
//     const m = matrix.length, n = matrix[0].length; 
//     let l = 0, r = m * n - 1
//     while (l <= r) {
//       const mid = Math.floor((l + r) / 2)
//       const midValue = matrix[Math.floor(mid / n)][mid % n]
//       if (midValue === target) {
//         return true
//       } else if (midValue < target) {
//         l = mid + 1
//       } else {
//         r = mid - 1
//       }
//     }
//     return false;
//   }

//   **************************************************************

// <aside>
// 💡 **Question 4**

// Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// **Example 1:**

// **Input:** nums = [0,1]

// **Output:** 2

// **Explanation:**

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// </aside>

// --------------------->Solution<---------------------

// const findMaxLength = function(nums) {
//     const n = nums.length
//     let maxLength = 0, count = 0
//     const map = new Map()
//     map.set(0, -1)
//     for (let i = 0; i < n; i++) {
//       count += nums[i] === 1 ? 1 : -1;
//       if (map.has(count)) {
//         maxLength = Math.max(maxLength, i - map.get(count))
//       } else {
//         map.set(count, i)
//       }
//     }
//     return maxLength
//   }

// ************************************************************

{/* <aside>
💡 **Question 5**

The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).

- For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

**Example 1:**

**Input:** nums1 = [5,3,4,2], nums2 = [4,2,2,5]

**Output:** 40

**Explanation:**

We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.

</aside> */}

// --------------------->Solution<---------------------

// const minProductSum = function(nums1, nums2) {
//     nums1.sort((a, b) => a - b)
//     nums2.sort((a, b) => b - a)
//     let sum = 0;
//     const n = nums1.length
//     for (let i = 0; i < n; i++) {
//       sum += nums1[i] * nums2[i]
//     }
//     return sum
//   }

// ****************************************************

{/* <aside>
💡 **Question 7**

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

**Example 1:**

![Screenshot 2023-05-29 005522.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00c8517f-7682-4e0b-bdd9-ce0e087f3f94/Screenshot_2023-05-29_005522.png)


**Input:** n = 3

**Output:** [[1,2,3],[8,9,4],[7,6,5]]

</aside> */}

// --------------------->Solution<---------------------

// const generateSpiralMatrix = function (n) {
//     const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
//     let num = 1, top = 0, bottom = n - 1, left = 0, right = n - 1
//     while (num <= n * n) {
//         for (let i = left; i <= right; i++) {
//             matrix[top][i] = num
//             num++
//         }
//         top++
//         for (let i = top; i <= bottom; i++) {
//             matrix[i][right] = num
//             num++
//         }
//         right--
//         for (let i = right; i >= left; i--) {
//             matrix[bottom][i] = num
//             num++
//         }
//         bottom--
//         for (let i = bottom; i >= top; i--) {
//             matrix[i][left] = num
//             num++
//         }
//         left++
//     }
//     return matrix;
// };
