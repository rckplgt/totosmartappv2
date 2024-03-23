import express from 'express'
//import router from express.Router()
import { getProducts, getProductById } from '../controllers/productController.js'

const router = express.Router()

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

export default router