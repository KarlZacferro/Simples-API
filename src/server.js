const port = 3000


const dataBase = require('./dataBase')
const express = require('express');
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produts', (req, res, next)=> {
    res.send({nome:'Notebook', price: 835.45 })
});

app.get('/produts/:id',(req, res, next) =>{
    res.send(dataBase.getProdut(req.params.id))
});

app.post('/produts', (req, res, next) => {
    const produts = dataBase.safeProdut({
        name: req.body.name,
        price: req.body.price
    })
    res.send(produts)
})

app.delete('/produts/:id', (req, res, next) => {
    const produt = dataBase.excluirProdut(req.params.id)
        res.send(produt)
      
   
})

app.listen(port, () => {
    console.log(`Server running on port  ${port}.`)
});



