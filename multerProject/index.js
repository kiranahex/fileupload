const express= require('express');
const app = express();
const path=require('path')

const dotenv=require('dotenv')
dotenv.config({ path: "./config.env" });
const port=process.env.PORT

require("./database/connection")
const fileRoutes = require("./routes/fileuploadroute")

app.use(express.json())
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

app.use('/upload',fileRoutes.router)
app.listen(port,console.log(`server is running on ${port}`))


