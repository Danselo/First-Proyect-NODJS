// PLEASE READ DOCUMENT (READ-TXT)
//require modules with updated syntax with esmyscript
import express from 'express';

//import path for the routes
import {dirname,join} from 'path'; 
import { fileURLToPath } from 'url';

//IMPORT ALL ROUTES 
import indexRoutes from './routes/index.js'

//with normal syntax
// const express = require('express');
// ---------------------
//Create server with express 

const app = express();


//create absolute route for views 
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views',join(__dirname, 'views')) //this is a dynamic form for obtaining the absolute route
// -----------
//Routes / URL
app.use(indexRoutes)

//Styles routes
app.use(express.static(join(__dirname,'public')));
// -----------------
//caracteristics server --(view engine  means template engine , using ejs for add caracteristics to html )
app.set('view engine','ejs') 

//render file index.ejs located in views 


app.listen(3000);
console.log("server listening on port",3000);
// write in localhost:3000 to url
 