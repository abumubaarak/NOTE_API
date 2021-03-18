const express= require('express')
const dotenv= require('dotenv')
const note= require('./routes/note')
const connectDb=require('./config/db')
const errorHandler= require('./middleware/error')
dotenv.config({path:'./config/config.env'})

connectDb()

const app= express()

app.use(express.json())

app.use("/api/v1/note",note)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server =app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} at port ${PORT}`))


process.on('unhandledRejection',(err,promise)=>{
    
    console.log(`Error: ${err.message}`);
    
        server.close(()=>process.exit(1))
    })