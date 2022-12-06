const cors = require('cors')
const express = require('express');
const path = require('path')
const app = express();
const port =  4000;
const rotas = require('./routes/index.routes')



//Rotas
const cliente = require('./routes/cliente.routes');
const auth = require('./routes/auth');
const product = require('./routes/product');
const category = require('./routes/category');

app.use(express.json())
app.use(cors())
app.use('/clientes-api', cliente)
app.use('/auth', auth)
app.use('/product', product)
app.use('/category', category)


rotas(app)


app.listen(port, function(){
    console.log("Rodando!!!")
    console.log(path.join(__dirname, "views"));
});