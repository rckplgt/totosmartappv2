import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import {errorHandler, notFound} from './middleware/errorMiddleware.js'


dotenv.config()
import connectDB from './config/db.js'

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.get('/', (req,res)=>{
    res.send('Server is running')
})

app.use('/api/products', productRoutes)
app.use('/api/product', productRoutes)


app.listen(port,()=>console.log(`Listening on port ${port}`))