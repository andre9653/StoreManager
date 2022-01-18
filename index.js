require('dotenv').config();
const express = require('express');
const createSalesRecord = require('./controller/createSalesRecord');
const deleteProduct = require('./controller/deleteProduct');
const deleteSale = require('./controller/deleteSale');
const listProductById = require('./controller/listProductById');
const listProducts = require('./controller/listProducts');
const listSaleById = require('./controller/listSaleById');
const listSales = require('./controller/listSales');
const registerProduct = require('./controller/registerProduct');
const updateProduct = require('./controller/updateProduct');
const updateSale = require('./controller/updateSale');
const serverError = require('./middleware/serverError');

const app = express();
app.use(express.json());
app.use(serverError);

app.get('/', (_request, response) => {
  response.send();
});

app.post('/products', registerProduct);
app.get('/products', listProducts);
app.get('/products/:id', listProductById);
app.put('/products/:id', updateProduct);
app.delete('/products/:id', deleteProduct);

app.post('/sales', createSalesRecord);
app.get('/sales', listSales);
app.get('/sales/:id', listSaleById);
app.put('/sales/:id', updateSale);
app.delete('/sales/:id', deleteSale);

app.listen(3000, () => {
  console.log('Online');
});
