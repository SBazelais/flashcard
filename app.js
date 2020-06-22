const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


const app = express()


app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.set('view engine', 'pug')

const mainRouter = require("./routes")
const cardRouter = require("./routes/card")

app.use(mainRouter)
app.use("/card", cardRouter)


app.listen(3000, ()=>{
    console.log('Server started on port 3000...');
    
})