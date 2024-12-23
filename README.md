<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>JavaScript Questions</h1>
</div>

> [!NOTE]  
> This repository was created in December 2024, and the questions provided here are based on the JavaScript syntax and behavior as of now. Since JavaScript is a constantly evolving language, future updates to the language may introduce features that are not covered in the questions here.

---

<p align="center">
From basic to advanced: test how well you know JavaScript, refresh your knowledge a bit or prepare for your coding interview! :muscle: :rocket: I update this repo regularly with new questions. I added the answers in the **collapsed sections** below the questions, simply click on them to expand it. It's just for fun, good luck! :heart:</p>

<p align="center">Feel free to reach out to me! 😊</p>

<p align="center">
  <a href="https://www.instagram.com/its_rajnishpandey">Instagram</a> || <a href="https://twitter.com/RajnishPandey97">Twitter</a> || <a href="https://www.linkedin.com/in/rajnish-pandey/">LinkedIn</a> || <a href="https://discord.com/channels/@me">Discord</a>
</p>

| Feel free to use them in a project! 😃 I would _really_ appreciate a reference to this repo, I create the questions and explanations (yes I'm sad lol) and the community helps me so much to maintain and improve it! 💪🏼 Thank you and have fun! |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

###### 1. What's the output?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Rajnish";
  let age = 25;
}

sayHi();
```

- A: `Rajnish` and `undefined`
- B: `Rajnish` and `ReferenceError`
- C: `ReferenceError` and `21`
- D: `undefined` and `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.

Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.

</p>
</details>

---

###### 2. What's the output?

```javascript
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
```

- A: `1` and `2`
- B: `2` and `1`
- C: `1`
- D: `2`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

Because of closure.

</p>
</details>

---

###### 3. What's the output?

```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

- A: `0 1 2 3 4`
- B: `5 5 5 5 5`
- C: `Undefined Undefined Undefined Undefined Undefined`
- D: `Error`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The output is 0 1 2 3 4, as described in Option A, because let is block-scoped.

</p>
</details>

---
