import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI);
    console.log("mongoo db successfully connected");
  } catch (e) {
    console.log("data did no connected:", e.message);
  }
};

export default connectToMongoDB;
