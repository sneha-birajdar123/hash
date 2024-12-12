import dotenv from "dotenv"
import express from "express"


dotenv.config()
const app = express()
const PORT = process.env.PORT || 6000
console.log(PORT);

console.log(process.env.NAMES);
