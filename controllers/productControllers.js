const Product = require('../models/product')
const Brands = require('../models/brand')

class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filtering(){
        const queryObj = {...this.queryString}

        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete(queryObj[el]))

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$'+match)
        
        this.query.find(JSON.parse(queryStr))
        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }

    paginating() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 12
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        
        return this;
    }
}

const getAllProducts = async (req, res) => {
    try {
        const features = new APIfeatures(Product.find(), req.query)
        .filtering().sorting()

        const allProducts = await features.query;
        const countAllProducts = allProducts.length;
        
        const products = await features.paginating().query;

        res.json({products, countAllProducts});
        
    } catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};

const getProductById = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};

const getBrands = async (req, res) => {
    try {
        const brands = await Brands.find({});
        res.json(brands);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getBrands
}