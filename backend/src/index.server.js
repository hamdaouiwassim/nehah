const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
env.config()
const bodyParser = require('body-parser')
const app = express()

app.use(express.json()) 
mongoose.connect('mongodb://localhost/pfecollector', {useNewUrlParser : true ,useCreateIndex: true, useUnifiedTopology : true }).then(()=>{
    console.log('Database connected')
})
//app.use(bodyParser) 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// routes 
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')




app.use('/api',authRoutes)
app.use('/api',adminRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)

} )

