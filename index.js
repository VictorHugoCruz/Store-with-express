const express = require('express')
const routerApi = require('./router');

const app = express();
const port = 3000

app.get('/', (req, res)=>{
  res.send('hola este es mi primer servidor con express')
});

app.get('/nueva-ruta', (req, res)=>{
  res.send('hola, esta es una nueva ruta o end-point')
});


routerApi(app);



// app.get('/categories/:categoryId/products/:productId', (req, res)=>{
//   const { categoryId, productId } = req.params;
//   res.json(
//     {
//       categoryId,
//       productId
//     }
//   )
// });



app.listen(port,()=>{
  console.log(`Server on port ${port}`)
});