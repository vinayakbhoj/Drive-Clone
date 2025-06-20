const express = require('express');
const app = express();
const UserRouter = require('./routes/user.routes');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file
const connectDB = require('./config/db');
connectDB(); // Connect to MongoDB
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.routes');





app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/', indexRouter);
app.use('/user', UserRouter);




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    
})