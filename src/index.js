import dotenv from "dotenv"

import { app } from "./app.js";
import { connectDB } from "./db/index.js";


dotenv.config({
  path: "./env"
})



// connecting database
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`)
    })
  })
  .catch((err) => {
    console.log(`MongoDB connection Failed !!!!!`, err)
  })

