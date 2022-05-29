const mongoose = require("mongoose");
const connectDB = async () => {
  const con = await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.dhqr3.mongodb.net/test",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log(`Connected to Database: ${con.connection.host} .`);
};
module.exports = connectDB;
