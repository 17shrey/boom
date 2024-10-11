const dotenv = require('dotenv');
const mongoose = require ('mongoose');
const express = require ("express");
app=express();

app.use(express.json());
require('./db/dbconnection')
app.use(require('./router/customroutes'))