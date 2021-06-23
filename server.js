require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
// const bodyParser = require('body-parser')

//routes
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

connectDB();

const app = express()
app.use(express.json())
// app.use(express.urlencoded());
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

//use bodyparser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


//use routes
app.use('/product', productRoutes);
app.use('/user', userRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})

// app.get('/', (req, res) => { 
//     res.json({msg: 'welcome'});
// })