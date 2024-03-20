import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from "colors";
import users from './data/users.js';
import User from "./models/userModel.js";
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'
import products from "./data/products.js";

dotenv.config()
connectDB()

const importData = async ()=>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map((product)=>{
            return {...product, user:adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log('Success. Data Inserted'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`Error: Data insert failed. ${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async ()=>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Success. Data destroyed!'.green.inverse)

        process.exit()
    } catch (error) {
        console.error(`Error: Delete failed. ${error}`.red.inverse)        
    }
}


if(process.argv[2]==='-d'){
    destroyData()
} else {
    importData()
}