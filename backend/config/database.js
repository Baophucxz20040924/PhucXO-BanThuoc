const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    // Kết nối trực tiếp tới MongoDB local
    const con = await mongoose.connect('mongodb://127.0.0.1:27017/mydatabasezzz');
    console.log(` MongoDB connected at: ${con.connection.host}`);
  } catch (err) {
    console.error(` MongoDB connection error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;
