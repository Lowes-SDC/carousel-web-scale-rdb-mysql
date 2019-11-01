const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/carousel', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!');
});


const schema = new mongoose.Schema({
    _id: Number,
    Name: String,
    Price: Number,
    Rating: Number,
    Reviews: Number,
    Category: Number,
    Picture: String
});
  
const carItem = mongoose.model('carItem', schema);

var silence = new carItem({ ProductId: 1,
  Name: "Mario",
  Price: 1,
  Rating: 1,
  Reviews: 1,
  Category: 1,
  Picture: "url"
 });

 console.log(silence.name);
  
module.exports = { carItem };