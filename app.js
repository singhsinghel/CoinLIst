require('dotenv').config();

const express=require('express');
const  mongoose  = require('mongoose');
const app=express();
const ejsMate=require('ejs-mate');

app.engine('ejs',ejsMate);
app.set('view engine','ejs');

const path=require('path');
app.set('views',path.join(__dirname,'views')); 
app.use(express.static(path.join(__dirname,"public")));


const dbUrl=process.env.AT;

async function main() {
    await mongoose.connect(dbUrl)
    console.log('connected');
    
}
main();
const coinRouter=require('./routes.js')

app.use('/',coinRouter);


app.listen(8080,()=>{
    console.log('app is listining');
})