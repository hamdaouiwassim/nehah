const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
env.config()
const bodyParser = require('body-parser')
const app = express()


// routes 

const userRoutes = require('./routes/user')


app.use(express.json()) 
mongoose.connect('mongodb://localhost/pfecollector', {useNewUrlParser : true , useUnifiedTopology : true }).then(()=>{
    console.log('Database connected')
})
//app.use(bodyParser) 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api',userRoutes)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)

} )

