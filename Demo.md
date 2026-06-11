


function enrollStudent(studentName) {
    console.log(`${studentName} enrolled successfully`);
    function markAttendance() {
        console.log(`Attendance marked for ${studentName}`);
    }
    return markAttendance;
}
const student1 = enrollStudent("Rahul");
// Hundreds or thousands of lines of code...
student1(); // Attendance marked for Rahul
// More code...
student1(); // Attendance marked for Rahul
enrollStudent("Priya");


## Advanced JavaScript MCQ Quiz (Variables, Functions, Scope, Closures)

**Difficulty Level: High**
**Total Questions: 20**

* Q1–Q12: Conceptual Questions
* Q13–Q20: Outcome-Based (Code Output) Questions

---

### 1. Which statement about `let` and `const` is TRUE?

A. `const` variables are hoisted but inaccessible before initialization. ✅
B. `let` variables can be redeclared in the same scope.
C. `const` objects cannot be modified.
D. `let` variables become properties of the global object.

**Answer:** A

---

### 2. What is the output?

```javascript
console.log(a);
let a = 10;
```

A. undefined
B. 10
C. null
D. ReferenceError ✅

**Answer:** D

---

### 3. Which function creates its own `this` binding?

A. Arrow Function
B. Regular Function ✅
C. Both
D. Neither

**Answer:** B

---

### 4. What is a closure?

A. A function with no parameters
B. A function that remembers variables from its outer scope ✅
C. A function returning another function
D. A recursive function

**Answer:** B

---

### 5. Which scope chain is searched first when resolving a variable?

A. Global Scope
B. Parent Scope
C. Current Scope ✅
D. Function Declaration Scope

**Answer:** C

---

### 6. Which statement about function declarations is TRUE?

A. They are not hoisted.
B. They are hoisted with their implementation. ✅
C. They are hoisted as undefined.
D. They must be declared before use.

**Answer:** B

---

### 7. Which keyword prevents reassignment but not mutation?

A. let
B. var
C. const ✅
D. static

**Answer:** C

---

### 8. What will happen?

```javascript
const user = { name: "John" };
user.name = "Alex";
```

A. Error
B. TypeError
C. name remains John
D. name becomes Alex ✅

**Answer:** D

---

### 9. Which statement about block scope is TRUE?

A. `var` is block scoped.
B. `let` and `const` are block scoped. ✅
C. Functions are block scoped by default.
D. JavaScript has no block scope.

**Answer:** B

---

### 10. What is lexical scope?

A. Scope determined by runtime execution
B. Scope determined by where variables are declared in code ✅
C. Scope determined by function calls
D. Scope determined by closures only

**Answer:** B

---

### 11. Which is NOT a higher-order function?

A. map()
B. filter()
C. reduce()
D. push() ✅

**Answer:** D

---

### 12. Which statement about closures is FALSE?

A. Closures can cause memory leaks if misused.
B. Closures preserve outer variables.
C. Closures are created only when returning a function. ✅
D. Closures enable data encapsulation.

**Answer:** C

---

# Outcome-Based Questions (Tricky)

### 13. What is the output?

```javascript
let a = 10;

function test() {
    console.log(a);
    let a = 20;
}

test();
```

A. 10
B. 20
C. undefined
D. ReferenceError ✅

**Answer:** D

---

### 14. What is the output?

```javascript
let x = 1;

function outer() {
    let x = 2;

    function inner() {
        console.log(x);
    }

    return inner;
}

const fn = outer();
fn();
```

A. 1
B. 2 ✅
C. undefined
D. Error

**Answer:** B

---

### 15. What is the output?

```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
```

A. 0 1 2 ✅
B. 3 3 3
C. 0 0 0
D. undefined

**Answer:** A

---

### 16. What is the output?

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
```

A. 0 1 2
B. 3 3 3 ✅
C. undefined
D. Error

**Answer:** B

---

### 17. What is the output?

```javascript
const obj = {
    count: 0,
    increment: function () {
        return function () {
            this.count++;
            console.log(this.count);
        };
    }
};

obj.increment()();
```

A. 1
B. NaN ✅
C. undefined
D. Error

**Answer:** B

**Explanation:** `this` refers to global object (or undefined in strict mode), not `obj`.

---

### 18. What is the output?

```javascript
function createCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
```

A. 1 2 3
B. 1 2 1 ✅
C. 1 1 1
D. 2 2 2

**Answer:** B

---

### 19. What is the output?

```javascript
let a = 5;

function test(a) {
    return function(b) {
        return a + b;
    }
}

console.log(test(10)(20));
```

A. 25
B. 30 ✅
C. 35
D. 15

**Answer:** B

---

### 20. What is the output?

```javascript
const arr = [];

for (let i = 0; i < 3; i++) {
    arr.push(() => i);
}

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());
```

A. 3 3 3
B. 0 1 2 ✅
C. 0 0 0
D. 1 2 3

**Answer:** B

---

### Bonus Super-Tricky Question

```javascript
let x = 10;

function foo() {
    console.log(x);

    let x = 20;

    function bar() {
        console.log(x);
    }

    bar();
}

foo();
```

A. 10 20
B. 10 10
C. ReferenceError ✅
D. undefined 20

**Answer:** C

Because `let x` inside `foo()` creates a Temporal Dead Zone before initialization, causing the first `console.log(x)` to throw a `ReferenceError`.






  <body>
    <h1>Welcome to KRMU</h1>
    <button onclick="handleclick()">Click</button>

    <script>
      function handleclick() {
        const heading = document.querySelector("h1");
        heading.textContent = "Welcome to Bootcamp";
        heading.style.backgroundColor = "red";
      }
    </script>
  </body>

<!-- with addEventListener -->

 <body>
    <h1>Welcome to KRMU</h1>
    <button>Click</button>

    <script>
      const heading = document.querySelector("h1");
      const button = document.querySelector("button");

      button.addEventListener("click", () => {
        heading.textContent = "Welcome to Bootcamp";
        heading.style.backgroundColor = "red";
      });
    </script>
  </body>

synchronous function 

console.log("1st");
function demo(){
    console.log("2nd)
}
demo()
console.log("3rd");


function sum(a,b){
    console.log(a+b)
}
function calculator(a,b,sumCallback){
    sumCallback(a,b)
}
calculator(1,2,sum)



Order of Execution :
JavaScript first executes all synchronous code from the Call Stack. After the Call Stack becomes empty, it executes all Microtasks (Promise callbacks, await continuations, queueMicrotask). Once the Microtask Queue is empty, it executes Macrotasks/Callback Queue tasks such as setTimeout, setInterval, DOM events (onclick,onchange), and I/O callbacks. This process is managed by the Event Loop.

first Synchronous then asynchronous

Call Stack (Synchronous)
        ↓
Microtask Queue
(Promise, await)
        ↓
Macrotask Queue
(setTimeout, onclick, setInterval)



let pro = new Promise((res,rej)=>{
    let quiz="top"
    if(quiz==="top"){
        res();
    }
    else{
        rej()
    }
})
pro.then(()=>{
    console.log("I will give you 5 star")
})
.catch(()=>console.log("i will give you Aryabhatta"))



const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log("Error:", err));
  


setTimeout(()=>{
    console.log("1")
},1000)
console.log("1st");
function demo(){
    console.log("2nd")
}
demo()
console.log("3rd");



// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },5000);
// setTimeout(()=>{
//     console.log("c")
// },3000);
// setTimeout(()=>{
//     console.log("d")
// },2000);
// console.log("e");



// setTimeout(()=>{
//     console.log("SetTimeout1");
// },0)
// function delay() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("SetTimeout2");
//       resolve();
//     }, 0);
//   });
// }
// function test() {
//   console.log("Start");
//   delay();
//   console.log("After Delay");
// }
// test();
// console.log("End");



// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },0);
// Promise.resolve().then(() => {
//  console.log("Promise");
// });
// console.log("e");


console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");





setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});




//task-1
console.log("A");

new Promise((resolve) => {
  console.log("B");
  resolve();
  console.log("C");
}).then(() => {
  console.log("D");
});

console.log("E");




setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout 2"), 0);
});

Promise.resolve().then(() => console.log("Promise 2"));




