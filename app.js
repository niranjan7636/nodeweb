require('dotenv').config()
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const hbs = require('hbs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const { json, urlencoded } = require('express')
const port = process.env.PORT || 3000
const { main , User } = require('./src/conection');
const cors = require('cors')



const viewPath = path.join(__dirname,"templates","views")
const parialsPath = path.join(__dirname,"templates","partials")
const publicDir = path.join(__dirname,"public")





const server = express()
server.use(cors())
const router = express.Router()

server.use(express.json())



server.use(express.static(publicDir))

// server.use('/css', express.static(path.join(__dirname,'node_modules','bootstrap','dist','css')))
// server.use('/js', express.static(path.join(__dirname,'node_modules','bootstrap','dist','js')))
// server.use('/jq', express.static(path.join(__dirname,'node_modules','jquery','dist')))


server.use(urlencoded({extended:false}))
server.use('/',router)


server.set('view engine','hbs')
server.set('views' , viewPath)

hbs.registerPartials(parialsPath)








router.get('/', (req,res)=>{
        res.render('index')
})


router.get('/contact' , (req,res)=>{
    res.render("contact")
})

router.post("/contact" , async (req,res)=>{

try {
  
const user = new User(req.body)

const data = await user.save()

res.status(201).render('index')






} catch (error) {
    res.status(500).send(error)
}

})





server.listen(port,()=>{
    console.log("server connected")
})

















