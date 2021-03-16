const express= require('express')
const dotenv= require('dotenv')
const router= require('./routes/note')

dotenv.config({path:'./config/config.env'})

const app= express()


app.use(router)

const PORT = process.env.PORT || 50007


app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} at port ${PORT}`))
