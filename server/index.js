const dotenv = require('dotenv');
const mongoose = require ('mongoose');
const express = require ("express");
app=express();
app.use(cors(
  {
    origin:["https://boom-frontend.vercel.app"],
    methods:["POST","GET"],
    credentials:true
    
  }
  ));

app.use(express.json());
require('./db/dbconnection')
app.use(require('./router/customroutes'))
