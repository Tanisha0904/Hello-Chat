const mongoose = require("mongoose");
const colors = require("colors");

const dbConnect = async () => {
  try {
    const connectionString = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `\nDB connected: ${connectionString.connection.host}\n`.cyan.underline
    );
  } catch (error) {
    console.log("\nConnection to link DB failed\n".red.bold);
  }
};

module.exports = dbConnect;
