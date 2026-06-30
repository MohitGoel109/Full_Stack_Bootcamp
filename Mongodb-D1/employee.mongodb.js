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