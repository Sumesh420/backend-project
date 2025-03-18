import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
const dbConnection=async () => {
try {
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`MongoDB connected !! DB host:${connectionInstance.connection.host}`)
} catch (error) {
    console.log("There is error in connection with database",error)
    process.exit(1)
}
}
export default dbConnection