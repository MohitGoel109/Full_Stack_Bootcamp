use("user")
//create 
// db.student.insertOne({
// "name": "John Doe",
// "rollNo":12344,
// "section":"DS",
// "email":"abc@abc.com"
// })

// db.student.insertMany([
//    {
//        "name":"Danny",
//        "rollNo":12345,
//        "section":"Aiml",
//        "email":"def@def.com"
//    },
//    {
//        "name":"Rohan",
//        "rollNo":12346,
//      "section":"FSD",
//      "email":"cdc@cdc.com"
//    }
// ])
// db.student.insertOne({
//     "name": "Alice Johnson",
//     "rollNo": 12347,
//     "section": "DS",
//     "email": "alice@abc.com"
// })
// db.student.insertMany([
//     {
//         "name": "Bob Smith",
//         "rollNo": 12348,
//         "section": "FSD",
//         "email": "bob@def.com"
//     },
//     {
//         "name": "Charlie Brown",
//         "rollNo": 12349,
//         "section": "Aiml",
//         "email": "charlie@ghi.com"
//     }
// ])

///////////////Read
db.student.find()
//db.student.find({"section"})
//db.student.find({"rollNo":{$lte:12345 }})
//db.student.find(find{}, {name:1, section:1,})
//db.student.find().skip(2).limit(2)

//update
//db.student.updateOne({"rollNo":12344},{$set:{"name":"John Smith","section":"FSD"}})

//delete
//db.student.deleteOne({"rollNo":12344})
//db.student.deleteMany({"section":"DS"})
