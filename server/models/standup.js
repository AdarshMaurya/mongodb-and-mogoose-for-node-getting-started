const mongoose = require('mongoose')

const standupSchema = new mongoose.Schema({
    teamMember: { type: String },
    project: { type: String },
    workYesterday: { type: String },
    workToday: { type: String },
    impedimentS: { type: String },
    createdOn: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Standup', standupSchema)


// // Disabled _id schema example
// const noIdSchema = new mongoose.Schema(
//     { name: String },
//     { _id: false }
// )

// // User Schema.add() example
// let exampleSchema = new mongoose.Schema

// //exampleSchema.add({ teamMember: String })
// const useFullName = true // Some business logic here 

// if (useFullName) {
//     exampleSchema.add({
//         teamMember: {
//             first: String,
//             last: String
//         }
//     })
// } else {
//     exampleSchema.add({ teamMember: String })
// }