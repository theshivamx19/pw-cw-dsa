{/* <aside>
💡 **Question 1**

Convert 1D Array Into 2D Array

You are given a **0-indexed** 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using **all** the elements from original.

The elements from indices 0 to n - 1 (**inclusive**) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (**inclusive**) should form the second row of the constructed 2D array, and so on.

Return *an* m x n *2D array constructed according to the above procedure, or an empty 2D array if it is impossible*.

**Example 1:**

![Screenshot 2023-05-29 004311.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de7ec927-9e60-4545-9475-f3ee31116192/Screenshot_2023-05-29_004311.png)

**Input:** original = [1,2,3,4], m = 2, n = 2

**Output:** [[1,2],[3,4]]

**Explanation:** The constructed 2D array should contain 2 rows and 2 columns.

The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.

The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.

</aside> */}

// -------------------> Solution <-------------------

// const convertTo2DArray = function(arr, m, n) {
//     const length = arr.length
    
//     if (length !== m * n) {
//       return []
//     }
//     const result = []
//     for (let i = 0; i < m; i++) {
//       result.push(arr.slice(i * n, (i + 1) * n))
//     }
//     return result
//   }

// ***************************************************************

{/* <aside>
💡 **Question 6**

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

**Example 1:**

**Input:** nums = [4,3,2,7,8,2,3,1]

**Output:**

[2,3]

</aside> */}

// -------------------> Solution <-------------------


// const findDuplicates = function(nums) {
//     const newArr = []
//     let i = 0;
//     while (i < nums.length) {
//       const j = nums[i] - 1
//       if (nums[i] !== nums[j]) {
//         [nums[i], nums[j]] = [nums[j], nums[i]]
//       } else {
//         if (i !== j) {
//           newArr.push(nums[i])
//         }
//         i++
//       }
//     }
//     return newArr
//   };

// ***************************************************************

{/* <aside>
💡 **Question 3**

Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

**Input:** nums = [-4,-1,0,3,10]

**Output:** [0,1,9,16,100]

**Explanation:** After squaring, the array becomes [16,1,0,9,100].

After sorting, it becomes [0,1,9,16,100].

</aside> */}

// -------------------> Solution <-------------------


// const sortedSquares = function(nums) {
//     const n = nums.length
//     const res = new Array(n)
//     let l = 0, r = n - 1, i = n - 1
//     while (l <= r) {
//       const lSquare = nums[l] * nums[l]
//       const rSquare = nums[r] * nums[r]
//       if (lSquare > rSquare) {
//         res[i] = lSquare
//         l++
//       } else {
//         res[i] = rSquare
//         r--
//       }
//       i--
//     }
//     return res
//   };
  