import express from "express"
import dotenv from "dotenv"
import { app } from "./app.js"
import dbConnection from "./db/index.js"
dotenv.config({
    path:"./env"
})

dbConnection()
.then(()=>{
   const server= app.listen(process.env.PORT||3000,()=>{
        console.log("App is listening on :",process.env.PORT)
    })
    server.on("error",(error)=>{
        console.log(error.message)
    })
})
.catch((error)=>{
    console.log(error)
})















/*;(async()=>{
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",()=>{
        console.log("Some problem occured")
    })
} catch (error) {
    console.log(error)
    throw error
}
})()*/