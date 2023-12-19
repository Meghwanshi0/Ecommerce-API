const express = require('express');
const app = express();
const port=8003;
const bodyParser = require('body-parser');
const productRoute = require('./routes/product');
const db = require('./config/mongoose');

//bodyParser.json() since we are parsing Json data and making it available in req.body
app.use(bodyParser.json());

//Routers
app.use('/products', productRoute);

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
});