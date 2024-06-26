
require('dotenv').config();
const { json } = require('body-parser');
const express = require('express');
const mongose = require('mongoose');
var http = require('http');
const { error } = require('console');
let ProductRoute = require('./Route/Route');
let CartRoute = require('./Route/RouteCart');
let OrderRoute = require('./Route/RouterOrder');
let bodyParser = require('body-parser');
const cors = require('cors');
// Know as Express;
let app = express();

// Get all Data in JsonFormat();
 
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});

app.use('/api/product',ProductRoute);
app.use('/api/cart',CartRoute);
app.use('/api/orders', OrderRoute);

// I am creating api:
 
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/plain'});
//     res.end("Helo nodejs");
// }).listen(4000);

// app.get('/',(req,rsp)=>{
//   rsp.json({mesg:"Get all Data"});

// });

// app.post('/product',(req,rsp)=>{
//     rsp.json({mesg:"Product Successfully uploded"});
// })


// Now I want to connect application with db;

app.use(bodyParser.json());
app.use(cors());

mongose.connect(process.env.monogo_url)

.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server runing port:,${process.env.PORT}`);
        console.log("Connection Successfully");
    })
})
.catch((error)=>{
    console.log(`Database not connected:${error}`);
})