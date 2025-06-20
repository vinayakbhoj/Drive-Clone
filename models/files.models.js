const mongoose = require('mongoose');



const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    originalName: {
        type: String,
        required: true,
    },
    public_id: {
        type: String,
        required: true, // Cloudinary file ID
    },
    format: {
        type: String,
        required: false, // like 'jpg', 'pdf', etc.
    },
    resource_type: {
        type: String,
        required: false, // 'image', 'video', or 'raw'
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    }
});

 
const file = mongoose.model('file', fileSchema);
module.exports = file;