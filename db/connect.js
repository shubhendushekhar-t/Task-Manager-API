const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
  })
}

module.exports = connectDB;
// We have to do this way because we want our server running only when we are connected to the database....
// So we can't invoke our .connect() function here.... instead we will export it and invoke it in app.js
// That's why we are not calling the .then() and .catch() methods here.

  
