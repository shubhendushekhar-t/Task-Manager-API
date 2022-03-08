const mongoose = require('mongoose')



const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],    // Specifies that name is neccessary
    // here we have used an array to specify a custom message to display
    trim: true,   // removes extra white spaces before or after the main string
    maxlength: [20, 'name cannot be more than 20 characters'],
  },
  completed: {
  type: Boolean,
  default: false,
  },  
})

module.exports = mongoose.model('Task', TaskSchema)