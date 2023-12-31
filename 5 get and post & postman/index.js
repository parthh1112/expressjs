const express = require('express')
const app = express()

const path = require('path')
 
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/',(req,res)=>{
    // res.send('hello to who so ever is reading this line :)')
    res.render('index')
})

app.get('/user',(req,res)=>{
    console.log(req.query)
    res.send('user page GET')
})

app.post('/user',(req,res)=>{
    console.log(req.body)
    res.json(req.body)
    res.send('user page POST')

})
app.listen(3006,()=>{
    console.log('server started')
})


