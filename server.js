const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
const rotas = require('./routes/index.routes')

//Rotas
const user = require('./routes/user');
const auth = require('./routes/auth');
const product = require('./routes/product');
const category = require('./routes/category');

app.use('/user', user)
app.use('/auth', auth)
app.use('/product', product)
app.use('/category', category)

app.use(express.json())
rotas(app)

app.listen(port, function(){
    console.log("Rodando!!!")
    console.log(path.join(__dirname, "views"));
});