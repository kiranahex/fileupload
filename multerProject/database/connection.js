const mongoose = require('mongoose')
const dotenv=require('dotenv')
dotenv.config({ path: "./config.env" });

const DB=process.env.DATABASE
mongoose.connect(DB)
.then( () => {
    console.log("DATABASE is connected")
})
.catch( ()=>{console.log("Connection is required")} )