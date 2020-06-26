const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require("cors");
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));

mongoose.connect('mongodb://localhost/clientes',{useNewUrlParser: true, useUnifiedTopology: true});

app.use(require('./routes/routes'));

app.listen(3000, (req,res)=>{
    console.log('servidor listo');
})