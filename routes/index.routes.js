const express = require('express');
const router = express.Router();
const multer  = require('multer');
const {storage, cloudinary} = require('../config/cloudinary.config');
const upload = multer({ storage })
const fileModel = require('../models/files.models');
const authMiddleware = require('../middlewares/authe');

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/home', authMiddleware, async(req, res) => {
    const userFiles = await fileModel.find({
        user: req.user.userId // Assuming req.user is set after authentication middleware
    })
 
    
    res.render('home', {
        files: userFiles
    });
});

router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {

    const uploadedFile = req.file;

    const newFile = await fileModel.create({
        path: uploadedFile.path,          // Cloudinary's secure_url
        originalName: uploadedFile.originalname,  // original file name
        public_id: uploadedFile.filename, // Add folder name if missing,         // Cloudinary's public_id
        format: uploadedFile.mimetype.split('/')[1], // fallback to 'raw',              // file format like 'jpg', 'pdf'
        resource_type: uploadedFile.mimetype.startsWith('image') ? 'image' : 'raw',// 'image', 'video', 'raw'
        user: req.user.userId                 // user ID from middleware
    });
    res.redirect('/home');
})


router.get('/download', authMiddleware, async (req, res) => {

    
    const loggeInUserId = req.user.userId; // Assuming req.user is set after authentication middleware
    const path = decodeURIComponent(req.query.path); // Get the file path from query parameters

    

    const file = await fileModel.findOne({
        user: loggeInUserId,
        public_id: path
    })
  
    

    if (!file) {
        return res.status(401).json({
            message: 'File not found'
        });
    }

    const downloadUrl = cloudinary.url(file.public_id, {
        flags: `attachment:${file.originalName}`
    });

    
    


    const signedUrl = cloudinary.url(file.public_id, {
        resource_type: file.resource_type,
        flags: `attachment:${file.originalName}`,
        secure: true,
    });

    
    // Step 4: Send the download URL
    // res.json({ downloadUrl: signedUrl });
    res.redirect(signedUrl); // Redirect to the signed URL for download

})

module.exports = router;

