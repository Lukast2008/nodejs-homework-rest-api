const mongoose = require("mongoose");

const app = require("./app");

const { MONGO_CONNECTION_STRING, PORT = 3000 } = process.env;

mongoose.set('strictQuery', true);

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then((result) => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
