const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) =>  {
    const resource_type = file.mimetype.startsWith('image')
    ? 'image' : file.mimetype.startsWith('video')
    ? 'video' : 'raw'; // Determine resource type based on MIME type

    return{
        folder: "DriveClone", // The folder in your Cloudinary account where the files will be stored
        allowed_formats: ['jpg', 'png', 'jpeg', 'pdf', 'mp3', 'mp4', 'mkv'], // Allowed file formats
        unique_filename: true, // Ensures that the filename is unique
        resource_type: resource_type, // Set the resource type dynamically
        public_id: file.originalname.split('.')[0], // Use the original file name without extension as public_id
    }
    
  },
});


module.exports = {
    cloudinary,
    storage
};