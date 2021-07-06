require('dotenv').config();

const data = require('./data');
const connectDB = require('../config/db');
const Product = require('../models/product');
const Category = require('../models/category');
const Brand = require('../models/brand');

const productData = data.products;
const categoryData = data.category;
const brandData = data.brand;

connectDB();

const importData = async() => {
    try {
        await Product.deleteMany();
        await Product.insertMany(productData);

        await Category.deleteMany();
        await Category.insertMany(categoryData);

        await Brand.deleteMany();
        await Brand.insertMany(brandData);

        console.log('Data import success');
        process.exit();
    } catch(error){
        console.error('Error with data import', error);
        process.exit(1);
    }
};

importData();
//use to import fake data for frontend, delete when complete backend