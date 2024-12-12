import express from "express"
import config from "config"
const app = express()

const PORT = config.get("PORT") || 6000
console.log(PORT);
