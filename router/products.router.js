const express = require('express');
const faker = require('faker')

const router = express.Router();


router.get('/', (req, res)=>{
  const products = [];
  const { size } = req.query;

  const limit = size || 10;

  for(let i = 0; i<limit; i++){
    products.push(
    {
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      img: faker.image.imageUrl()
    });
  }
  res.json(products)
});

router.get('/filter', (req, res)=>{
  res.send('las rutas especificas deben ir antes que las rutas dinamicas')
})

//esta es una ruta dinamica por tal motivo debe ir despues de las rutas especificas
router.get('/:id', (req, res)=>{
  const {id} = req.params 
  res.json(
    {
      id,
      name: "Producto1",
      price: 100
    }
  )
});

module.exports = router;