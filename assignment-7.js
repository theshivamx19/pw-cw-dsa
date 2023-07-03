{/* <aside>
💡 **Question 2**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true

</aside> */}

// ------------------> Solution <---------------------

// const isStrobogrammatic = function(num) {
//     const map = {
//       '0': '0',
//       '1': '1',
//       '6': '9',
//       '8': '8',
//       '9': '6',
//     };
  
//     let l = 0, r = num.length - 1
//     while (l <= r) {
//       const leftNum = num[l], rightNum = num[r]
//       if (!(leftNum in map) || map[leftNum] !== rightNum) {
//         return false;
//       }
//       l++
//       r--
//     }
//     return true
//   }
  
// ***********************************************

{/* <aside>
💡 **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"

</aside> */}

// ------------------> Solution <---------------------

// const reverseWords = function(s) {
//     const words = s.split(' ') , newArr = []
//     for (let word of words) {
//       const reversedWord = word.split('').reverse().join('')
//       newArr.push(reversedWord);
//     }
//     return newArr.join(' ')
//   }

// ***********************************************
  
{/* <aside>
💡 **Question 5**

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example 1:**

**Input:** s = "abcdefg", k = 2

**Output:**

"bacdfeg"

</aside> */}

// ------------------> Solution <---------------------

// const reverseStr = function(s, k) {
//     const c = s.split('')
//     for (let i = 0; i < c.length; i += 2 * k) {
//       let l = i
//       let r = Math.min(i + k - 1, c.length - 1)
  
//       while (l < r) {
//         [c[l], c[r]] = [c[r], c[l]]
//         l++
//         r--
//       }
//     }
  
//     return c.join('')
//   }
