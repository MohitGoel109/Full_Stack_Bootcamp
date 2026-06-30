use("company")

//////////////// 1. Create collection + insert 5 records
// db.employee.insertOne({
//     "name": "Aman Sharma",
//     "empid": 101,
//     "department": "IT",
//     "email": "aman.sharma@company.com",
//     "Salary": 55000,
//     "bonus": 5000
// })

// db.employee.insertMany([
//     {
//         "name": "Priya Singh",
//         "empid": 102,
//         "department": "HR",
//         "email": "priya.singh@company.com",
//         "Salary": 48000,
//         "bonus": 3000
//     },
//     {
//         "name": "Rahul Verma",
//         "empid": 103,
//         "department": "Finance",
//         "email": "rahul.verma@company.com",
//         "Salary": 60000,
//         "bonus": 6000
//     },
//     {
//         "name": "Sneha Patel",
//         "empid": 104,
//         "department": "Marketing",
//         "email": "sneha.patel@company.com",
//         "Salary": 50000,
//         "bonus": 4000
//     },
//     {
//         "name": "Vikram Rao",
//         "empid": 105,
//         "department": "IT",
//         "email": "vikram.rao@company.com",
//         "Salary": 65000,
//         "bonus": 7000
//     }
// ])

//////////////// 2. Read all records
// db.employee.find()
//db.employee.find({"department":"IT"})
//db.employee.find({"Salary":{$gte:55000}})
//db.employee.find({}, {name:1, empid:1, Salary:1})
//db.employee.find().skip(2).limit(2)

//////////////// 3. Update salary of an employee with specific empid
//db.employee.updateOne({"empid": 103}, {$set: {"Salary": 70000}})

//////////////// delete
//db.employee.deleteOne({"empid":101})
//db.employee.deleteMany({"department":"IT"})

//////////////// 4. Aggregate functions

// // a) Group by department and count employees in each department
// db.employee.aggregate([
//     { $group: { _id: "$department", totalEmployees: { $sum: 1 } } }
// ])

// // b) Group by department and find average salary
// db.employee.aggregate([
//     { $group: { _id: "$department", avgSalary: { $avg: "$Salary" } } }
// ])

// // c) Group by department and find total (sum) salary + total bonus
// db.employee.aggregate([
//     { $group: { _id: "$department", totalSalary: { $sum: "$Salary" }, totalBonus: { $sum: "$bonus" } } }
// ])

// // d) Find max and min salary across all employees
// db.employee.aggregate([
//     { $group: { _id: null, maxSalary: { $max: "$Salary" }, minSalary: { $min: "$Salary" } } }
// ])

// // e) Match (filter) + Group: average salary only for IT department
// db.employee.aggregate([
//     { $match: { department: "IT" } },
//     { $group: { _id: "$department", avgSalary: { $avg: "$Salary" } } }
// ])

// // f) Sort departments by average salary descending
// db.employee.aggregate([
//     { $group: { _id: "$department", avgSalary: { $avg: "$Salary" } } },
//     { $sort: { avgSalary: -1 } }
// ])

// // g) Project a computed field: total compensation (Salary + bonus) per employee
// db.employee.aggregate([
//     { $project: { name: 1, empid: 1, totalCompensation: { $add: ["$Salary", "$bonus"] } } }
// ])

// // h) Count total number of employees
// db.employee.aggregate([
//     { $count: "totalEmployees" }
// ])

// db.employee.aggregate([
//     { $sort: { Salary: -1 } },
//     {$project: {name:1, empid:1, Salary:1, bonus:1, totalCompensation: {$add:["$Salary", "$bonus"]}}}])

// db.employee.aggregate([
//     { $group: { 
//         _id: "$department", 
//         totalSalary: { $sum: { $add: ["$Salary", "$bonus"] } }
//     } }
// ])

// db.employee.aggregate([
//     { $group: { 
//         "_id": null, 
//         "totalSalary": { $sum: { $add: ["$Salary", "$bonus"] } } } }])

// indexes
// db.employee.find({empid: 105})
db.employee.getIndexes()