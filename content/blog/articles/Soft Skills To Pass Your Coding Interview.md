---
title: Soft Skills To Pass Your Coding Interview
date: 02.12.2023
visible: true
---

In this article, I'll try to go over some essential _"Soft Skills"_ for coding interviews. The way you communicate, but with your code.

## Overview 📖

It doesn't matter if you have solved hundreds of coding problems, it doesn't matter if you can complete any coding challenge with the best time/space complexity you still might fail your coding interview unless you can communicate the logic behind your code and explain your reasoning.

In this post I'll go over some _"Soft Skills"_ for coding interviews that you should master to pass said interview. I would argue that if you're able to concisely explain your approach (especially if it's correct), explain your thought process, if your coding style is clean and readable you could easily pass your coding interview even without solving the problem.

## Ask questions💡

When your interviewer explains the problem you need to ask questions. Not only will it help you understand the problem better, but it will also show your interviewer that you are a keen listener and interested in the problem.

Asking for additional information is one way of conveying your thought process to your interviewer. Not only that, but while doing so you might pick up on some hints about which direction your interviewer wants you to go.

The real goal here is that you want to eliminate any ambiguity surrounding the problem, unravel the problems requirements. In a real job there would be a lot of cases where problems are really vague and you need to do your research to figure out what the problem is and how to solve it. If you could show your interviewer that you can handle ambiguous problems on your own shows that you are a self-starter and can work independently.

On the other hand the worst thing you could do is to assume that you know what the problem is and start coding right away. You might solving the problem in a wrong way. More so it shows your interviewer that you didn't really take time to consider any obstacles, edge cases, space complexity. What if your interviewer is not okay with having built in methods and wants the best performance possible, or your interviewer mostly care about readability and result. You need to figure those things out before you start coding.

**_Here are some question you could ask your interviewer:_**

* What is the input? What is the output? - _If the language you are using here is Typescript, would be great if output is already typed or you could pre-type it by yourself_
* Is it okay if we define types for inputs output?
* Are there any edge cases to handle?
* Are we looking for best time/space complexity? - _There might be the cases where it doesn't matter and the right answer is the priority._
* Is this the best solution? - _Even before you start coding when you come up with a solution and plan everything out, double check with your interviewer if your solution is what they are looking for._
* Are we okay using this/that data structure? - _If you are using a data structure that is not the most optimal one, but you know that it will work, ask your interviewer if it's okay to use it._
* Are test cases pre-defined? - _In some cases you might end up coding in sandbox environment, opposite of leetcode, where there is only you and code, in that case pre-defining test cases covering few basic and couple of edge cases would be great (that's what we call TDD)_ 😉

## Explain your thought process 🤔

When it comes to coding interviews, it's not just about solving the problem. It's also important to explain your thought process and reasoning behind your solution. One of the worst positions you could be in is when your interviewer is guessing what you're actually trying to do. Imagine you have silently completed your solution, but one of the test cases is failing so instead your interviewer actually helping you, they're guessing what your algorithm actually is.

1. Clarify the problem. As with the first thesis, ask questions. Make sure you understand the problem and the requirements.
2. Break the problem down into smaller, more manageable parts. This will help you tackle the problem in a more organized and structured way.
3. Explain your approach. Once you have a plan in mind, explain your approach to the interviewer. This will help the interviewer understand your thought process and give them an opportunity to provide feedback or guidance.
4. Use examples. Use examples to illustrate your thought process. This will help the interviewer follow along and understand your reasoning.
5. Whiteout solution with comments or pseudocode before you start coding. This will help you stay on track and not get lost in the code. And if your solution is wrong, or not optimal, it will help your interviewer understand your thought process and give you hints on how to improve your solution.
    <br>
    <br>
  
    ```js
    function findPeak(arr) {
        // Initialize left and right pointers
        // Use binary search to find item that is greater than both of its neighbors
        // Return the index of the item
    }
    ```

## Better variable names 👏

Name your variables based on the terms of the subject area, so that the variable name clearly describes its purpose - _[1c Rules of Naming Variables](https://1c-dn.com/library/rules_of_naming_variables/)_. Couldn't have said it better myself.

### Avoid

**❕Avoid using single letter variables unless it's a loop counter, or something already established:**

* `i` - loop counter
* `j` - nested loop counter
* `k` - mostly used for 3rd lvl loop counter

**❕Avoid using acronyms and abbreviations unless it's a well known one:**

```js
// 👎 Bad
const mn = 1000 // That's suppose to to maxNum
const mip = 100 // That's suppose to be maxItemPrice
```

<br>
<br>

```js
// 👍 Acceptable
const httpUrl = 'https://colthands.dev'
const sshKey = 'ssh-rsa AAAAB3NzaC1yc2EAA'
const apiKey = '1234567890'
const awsNodeSdkUrl = 'https://aws.amazon.com/sdk-for-node-js/'
```

There is a great deal of readability that goes into boolean naming. In general you want your boolean to be named in a way that it reads like a sentence. A variable that starts with a suffix will read very well:

* `is`
* `has`
* `should`
* `can`

```js
// 👎 Bad
const login = true
const redirect = false
```

<br>
<br>

```js
// 👍 Good
const canLogin = true

const shouldRedirect = false

const isAdmin = false

const hasActiveSubscription = true
```

**❕Avoid using negation in your boolean variable names.**

```js
// 👎 Bad
const isNotLoggedIn = false
const isNotAdmin = false
```

## Split your code into manageable chunks 🔪

You should always take advantage of splitting your code into separate logically independent functions. This will make your code more readable and easier to debug.

Lets take an example where we have to find the peak in a mountain array. We can split one logically independent function into a helper function.

```js
/**
 * @description Returns the index of the peak in the array
 * Please don't use this code in prod, it's an example
 */
const findPeak = (array) => {
    let peak = -1

    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            peak = i
        }
    }

    return peak
}
```

<br>
<br>

```js
/**
 * @description Returns the index of the peak in the array
 * This helper function could be used to find the peak in a mountain array
 */
const isPeak = (array, index) => array[index] > array[index - 1] && array[index] > array[index + 1]

/**
 * @description Returns the index of the peak in the array
 * Please don't use this code in prod, it's an example
 */
const findPeak = (array) => {
    let peak = -1

    for (let i = 1; i < array.length - 1; i++) {
        if (isPeak(array, i)) {
            peak = i
        }
    }

    return peak
}
```

In an interview setting if this helper method is trivial you could define it and leave it empty, tell your interviewer what this method should do and continue with the rest of your solution.

This will show your interviewer that you know the importance of splitting your code into smaller more manageable chunks and helper functions.

Splitting your code into more manageable chunks doesn't mean only splitting parts into helper functions. Sometimes there is a very ambiguous `if` statement where conditionals do not make sense without context.
Splitting them into separate variables or function would make your `if` statement much more readable.

```js
// 👎 Bad
if(array[index+1] > 0 && array[index+1] < 100 && array[index+1] % 2 === 0) {
    // do something
}
```

<br>
<br>

```js
// 👍 Good

// NOTE: Some number we're looking for in this algorithm
const num = array[index+1]
const isEven = num % 2 === 0
const isInRange = num > 0 && num < 100


if(isEven && isInRange) {
    // do something
}
```

Isn't this just so much better? 😍

Not that your interviewer would be necessarily impressed, but it would make following along with your code much easier.

## Write comments ✍️

Sometimes when im writing an algorithm after writing 20-30 lines of code I might forget what this or that section of code does.
If you fall in that category, I would highly suggest documenting with comments pieces of your code.

The example below is trivial, but with a nicely detailed JSDoc comment you could not only explain what this function does, you could describe your variables in JSDOC and save some space with smaller variable names in actual code (especially if you're using them a bunch).

```js
/**
 * @description Returns the index of the peak in the array
 * @param {number[]} arr - array to search
 * @param {number} i - index to check
 */
const isPeak = (arr, i) => arr[i] > arr[i - 1] && arr[i] > arr[i + 1]
```

## Know your programming language 📚

Unless your interviewer specifically states that you should not use any built-in methods, you should use them to the fullest of your advantage.

You could write your program with for loops and perform your own array search methods. But if you're using builtin methods such as `indexOf`, `search`, `slice` for readability you could state that you're using them for readability and you know their [performance drawbacks](https://stackoverflow.com/questions/15622248/time-complexity-for-javascript-methods-in-v8).

```js
// 👎 Bad, This will of course work, but it's not the best way to do it
function addNumberToEachElement(arr, num) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + num)
    }

    return newArr
}
```

<br>
<br>

```js
// 👍 Good, This is much more readable and concise
const addNumberToEachElement = (arr, num) => arr.map(el => el + num)
```

This way of writing code will show your interviewer that you know how to approach the problem, especially when you start writing such method you state that you know that this specific method could be optimized, but you're using it for the sake of readability, which in **JavaScript** happens a lot.

## Ending thoughts ❤️

* **Make mistakes.** It's natural to make mistakes during a coding interview. In fact, making mistakes can be an opportunity to show your problem-solving skills and how you handle errors. Rather than being discouraged by mistakes, use them as a learning experience to improve your skills and prepare for future interviews.
* **It's okay to google.** If you forgot how this or that method works, something that could be found by a quick glance at a documentation - go for it, but always make sure to ask your interviewer first, maybe he knows what you're looking for also keeping the conversation going. What's important is to show your problem-solving skills, your ability to learn and adapt, and your enthusiasm for the job.
* **Practice everything.** Don't think you will magically remember doing all of this in an interview, practice everything, comment your code, thinki about variable naming, split your code into smaller functions. One of the good practices is - do some leetcode problems, then come back after a while, review it and see what you could have done better and refactor your code if it needs it.

So in the end, even if some of your test cases fail, but you're able to explain your solution clearly, if your code is clean and readable, you still might pass your coding interview. ❤️

<!-- ## Materials used 👓 -->

<!-- * [Rules of naming variables](https://1c-dn.com/library/rules_of_naming_variables/) -->
<!-- * [Better Boolean Variable Names](https://www.samanthaming.com/tidbits/34-better-boolean-variable-names/) -->
<!-- * [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850) -->
<!-- * [Don't Write Comments](https://www.youtube.com/watch?v=Bf7vDBBOBUA) -->
<!-- * [How to Write Clean Code](https://www.youtube.com/watch?v=7EmboKQH8lM) -->
