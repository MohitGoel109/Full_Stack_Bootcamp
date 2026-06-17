# JavaScript Array Methods - Interview Notes

## 1. Difference between `map()`, `filter()`, and `reduce()`

### 🔹 map()

* Used to **transform each element**
* Returns a **new array (same length)**

```js
const arr = [1,2,3];
const res = arr.map(x => x * 2); // [2,4,6]
```

---

### 🔹 filter()

* Used to **select elements based on condition**
* Returns a **new array (may be smaller)**

```js
const arr = [1,2,3,4];
const res = arr.filter(x => x % 2 === 0); // [2,4]
```

---

### 🔹 reduce()

* Used to **convert array into single value**
* Returns **one value (sum, object, etc.)**

```js
const arr = [1,2,3];
const res = arr.reduce((acc, curr) => acc + curr, 0); // 6
```

---

## 2. Difference between `find()` and `filter()`

### 🔹 find()

* Returns **first matching element**
* Stops after finding one

```js
const arr = [1,2,3,4];
arr.find(x => x > 2); // 3
```

---

### 🔹 filter()

* Returns **all matching elements**
* Checks entire array

```js
arr.filter(x => x > 2); // [3,4]
```

---

## 3. Difference between `some()` and `every()`

### 🔹 some()

* Returns **true if ANY element satisfies condition**

```js
[1,2,3].some(x => x > 2); // true
```

---

### 🔹 every()

* Returns **true only if ALL elements satisfy condition**

```js
[1,2,3].every(x => x > 0); // true
```

---

## 4. Difference between `push()`, `pop()`, and `unshift()`

### 🔹 push()

* Adds element to **end**
* Returns new length

```js
let arr = [1,2];
arr.push(3); // [1,2,3]
```

---

### 🔹 pop()

* Removes element from **end**

```js
arr.pop(); // [1,2]
```

---

### 🔹 unshift()

* Adds element to **beginning**

```js
arr.unshift(0); // [0,1,2]
```

---

## 🎯 Final Tip (Interview Line)

* `map` → transform
* `filter` → select
* `reduce` → accumulate
* `find` → first match
* `some` → any true
* `every` → all true
* `push/pop/unshift` → modify array

