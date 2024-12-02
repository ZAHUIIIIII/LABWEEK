const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const todoListSchema = new mongoose.Schema({
   name: {
      type: String,
      required: 'Kindly enter the name of the task'
   },
   created_date: {
      type: Date,
      default: Date.now
   },
   status: {
      type: [{
         type: String,
         enum: ['todo', 'doing', 'done']
      }],
      default: ['todo']
   }
})

const todoListModel = mongoose.model("tasks", todoListSchema)


