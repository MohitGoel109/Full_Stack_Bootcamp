# MongoDB Notes — Student & Employee Collections

These notes explain the MongoDB Shell (`mongosh` / Playground) operations used in
`student.mongodb.js` and `employee.mongodb.js`.

---

## 1. Selecting a Database

```javascript
use("user")        // student.mongodb.js
use("company")     // employee.mongodb.js
```
`use("dbName")` switches to (or creates, on first write) the specified database.

---

## 2. Create — Inserting Documents

| Method | Purpose |
|---|---|
| `insertOne({...})` | Inserts a single document into a collection. |
| `insertMany([{...}, {...}])` | Inserts multiple documents at once (as an array). |

**Student example**
```javascript
db.student.insertOne({ "name": "John Doe", "rollNo": 12344, "section": "DS", "email": "abc@abc.com" })
```

**Employee example**
```javascript
db.employee.insertOne({ "name": "Aman Sharma", "empid": 101, "department": "IT", "email": "aman.sharma@company.com", "Salary": 55000, "bonus": 5000 })
```

If the collection (`student` / `employee`) doesn't already exist, MongoDB creates it automatically on the first insert.

---

## 3. Read — Querying Documents

| Method | Purpose |
|---|---|
| `find()` | Returns all documents in the collection. |
| `find({ field: value })` | Filters documents matching a condition. |
| `find({ field: { $lte: value } })` | Comparison operators: `$lte`, `$gte`, `$lt`, `$gt`, `$eq`, `$ne`. |
| `find({}, { field1: 1, field2: 1 })` | Projection — return only selected fields. |
| `find().skip(n).limit(m)` | Pagination — skip `n` docs, return next `m`. |

**Student example**
```javascript
db.student.find()
db.student.find({ "rollNo": { $lte: 12345 } })
db.student.find().skip(2).limit(2)
```

**Employee example**
```javascript
db.employee.find()
db.employee.find({ "department": "IT" })
db.employee.find({ "Salary": { $gte: 55000 } })
db.employee.find({}, { name: 1, empid: 1, Salary: 1 })
```

---

## 4. Update — Modifying Documents

| Method | Purpose |
|---|---|
| `updateOne(filter, { $set: {...} })` | Updates the first document matching the filter. |
| `updateMany(filter, { $set: {...} })` | Updates all matching documents. |
| `$set` | Sets/overwrites the value of a field (creates it if it doesn't exist). |

**Student example**
```javascript
db.student.updateOne({ "rollNo": 12344 }, { $set: { "name": "John Smith", "section": "FSD" } })
```

**Employee example**
```javascript
db.employee.updateOne({ "empid": 103 }, { $set: { "Salary": 70000 } })
```

---

## 5. Delete — Removing Documents

| Method | Purpose |
|---|---|
| `deleteOne(filter)` | Deletes the first document matching the filter. |
| `deleteMany(filter)` | Deletes all matching documents. |

**Student example**
```javascript
db.student.deleteOne({ "rollNo": 12344 })
db.student.deleteMany({ "section": "DS" })
```

**Employee example**
```javascript
db.employee.deleteOne({ "empid": 101 })
db.employee.deleteMany({ "department": "IT" })
```

---

## 6. Aggregate — Computing & Summarizing Data

The aggregation pipeline processes documents through a sequence of **stages**,
each stage transforming the data before passing it to the next.

| Stage | Purpose |
|---|---|
| `$group` | Groups documents by a field (`_id`) and computes accumulated values. |
| `$match` | Filters documents (like `find()`, but used inside a pipeline). |
| `$sort` | Sorts documents by a field (`1` = ascending, `-1` = descending). |
| `$project` | Reshapes documents — include, exclude, or compute new fields. |
| `$count` | Counts the number of documents passing through the pipeline. |

**Common accumulator operators (used with `$group`)**
| Operator | Purpose |
|---|---|
| `$sum` | Adds values, or counts documents with `$sum: 1`. |
| `$avg` | Calculates the average of a field. |
| `$max` / `$min` | Finds the maximum/minimum value of a field. |

**Employee aggregation examples**
```javascript
// Count employees per department
db.employee.aggregate([
    { $group: { _id: "$department", totalEmployees: { $sum: 1 } } }
])

// Average salary per department
db.employee.aggregate([
    { $group: { _id: "$department", avgSalary: { $avg: "$Salary" } } }
])

// Total salary + bonus per department
db.employee.aggregate([
    { $group: { _id: "$department", totalSalary: { $sum: "$Salary" }, totalBonus: { $sum: "$bonus" } } }
])

// Highest and lowest salary across all employees
db.employee.aggregate([
    { $group: { _id: null, maxSalary: { $max: "$Salary" }, minSalary: { $min: "$Salary" } } }
])

// Filter (match) then group: average salary in IT department only
db.employee.aggregate([
    { $match: { department: "IT" } },
    { $group: { _id: "$department", avgSalary: { $avg: "$Salary" } } }
])

// Sort department averages, highest first
db.employee.aggregate([
    { $group: { _id: "$department", avgSalary: { $avg: "$Salary" } } },
    { $sort: { avgSalary: -1 } }
])

// Add a computed field: total compensation = Salary + bonus
db.employee.aggregate([
    { $project: { name: 1, empid: 1, totalCompensation: { $add: ["$Salary", "$bonus"] } } }
])

// Total number of employees
db.employee.aggregate([
    { $count: "totalEmployees" }
])
```

---

## 7. Quick Reference — CRUD vs Aggregate

| Operation | CRUD Method | Aggregation Equivalent |
|---|---|---|
| Filter documents | `find({ ... })` | `{ $match: { ... } }` |
| Select specific fields | `find({}, { field: 1 })` | `{ $project: { field: 1 } }` |
| Count documents | `find().count()` | `{ $count: "name" }` |
| Group & summarize | *(not possible with plain CRUD)* | `{ $group: { ... } }` |

**Key takeaway:** CRUD operations (`insert`, `find`, `update`, `delete`) handle basic
data management, while the **aggregation pipeline** is used for analytics —
grouping, summarizing, and computing values across many documents.
