import mongoose from "mongoose";
import { DB_NAME } from "../contstants.js";



export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
    console.log(
      `\n MONGODB CONNECTED!! DB HOST: ${connectionInstance.connection.host} `
    )


  } catch (error) {
    console.log(`MongoDB connection error ${error}`)
    process.exit(1)
  }
}
