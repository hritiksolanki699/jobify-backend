import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url, {
    dbName: "Jobify",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
export default connectDB;
