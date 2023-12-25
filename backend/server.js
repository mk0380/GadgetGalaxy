const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/userRoute')

const app = express()
dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:['http://localhost:3000'],
    credentials:true
}))

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log('Server connected...PORT :', PORT);
})

const MONGO_URL = process.env.MONGO_URL
mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL).then(()=>{
    console.log('Database connected...');
}).catch((err)=>{
    console.log('Error while connecting to the database : ',err.message);
})

app.use('/api/users', userRoute)

app.get('/',(req,res)=>{
    res.send("Home Page")
})
