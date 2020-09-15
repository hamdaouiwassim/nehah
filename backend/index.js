const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.port | 80
mongoose.connect('mongodb://localhost/pfecollector',{useNewUrlParser : true ,  useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("h");
}); 
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/api',require('./routes/index'))


app.listen(port)
