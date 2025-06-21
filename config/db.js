const mongoose = require('mongoose');


function connectDB() {
    mongoose.connect(process.env.ATLASDB_URL).then(() => {
        console.log('MongoDB connected successfully');
    })
}


module.exports = connectDB;