import express from "express"
import dotenv from "dotenv"
import dbConnection from "./db/index.js"
dotenv.config({
    path:"./env"
})

dbConnection()















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