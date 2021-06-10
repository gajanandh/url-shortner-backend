const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CORS = require('cors')
require('dotenv').config();
 const port  = process.env.PORT||3000

const routes = require('./routes/routes')


const app = express();



mongoose.connect(process.env.DB, 
    {
      useNewUrlParser: true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
    }).then(()=>{console.log('MONOGODB CONNECTED')});
    
    app.use(CORS({
      origin:'http://localhost:3000',
      optionsSuccessStatus: 200 
    }))

    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',routes)


app.listen(port,()=>{
    console.log("app listening on port"+port)
})