require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')

//routes
const productRoutes = require('./routes/productRoutes')

connectDB();

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

//use routes
app.use('/product', productRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})

// app.get('/', (req, res) => {
//     res.json({msg: 'welcome'});
// })