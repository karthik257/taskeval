const mongoose = require("mongoose");

const connect = () => {
  return new mongoose.connect(
    "mongodb+srv://masai:masai@cluster0.ieas7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

module.exports = connect;
