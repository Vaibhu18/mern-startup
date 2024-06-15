import mongoose from "mongoose";

export const mongoDBConnection = async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DB_NAME}`)
      .then(() => {
        console.log("MongoDB Connected");
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};
