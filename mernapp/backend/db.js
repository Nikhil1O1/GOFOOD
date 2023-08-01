const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:taKGJr2k5ojxkl98@cluster0.bgpaa3e.mongodb.net/?retryWrites=true&w=majority'

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });

const mongoDB = async() => {
    await mongoose
    .connect(mongoURI, {
      useNewUrlParser: true
    })
    .then(() => console.log('DB connection successful!'));
}


module.exports = mongoDB;
