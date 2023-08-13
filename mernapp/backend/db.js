const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:taKGJr2k5ojxkl98@cluster0.bgpaa3e.mongodb.net/gofoodmern?retryWrites=true&w=majority'

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// async function called(){
//   console.log('Connection successful!');
//   const fetched_data = await mongoose.connection.db.collection("food_items");
//   await fetched_data.find({}).toArray(function(err, data){
//     // if(err) console.log(err);
//     // else console.log(data);
//     console.log(data)})
// };

async function called() {
  console.log('Connection successful!');
  const FoodCategory = mongoose.model('food_items', new mongoose.Schema({}));
  const data = await FoodCategory.find().exec();
  // console.log(data);
  }

const mongoDB = async () => {
  await mongoose
    .connect(mongoURI, {
      useNewUrlParser: true
    })
    .then(() => called())
}

module.exports = mongoDB;