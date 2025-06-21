const express = require('express');
const router = express.Router();
const { body,validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fileModel = require('../models/files.models');
const authMiddleware = require('../middlewares/authe');

// url - /user/register
router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/register',
    body('email').trim().isEmail().isLength({ min: 12 }),
    body('username').trim().isLength({ min: 2 }),
    body('password').trim().isLength({ min: 5 }),
    async(req, res) => {
    // Here you would typically handle user registration logic
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), message: "Invalid Data" });
    }
    
    const { username, email, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    res.redirect('/user/login');
    
    
});


// url - /user/login
router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', 
    body('username').trim().isLength({ min: 2 }),
    body('password').trim().isLength({ min: 5 }),
    async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), message: "Invalid username or password" });
    }

    const { username, password } = req.body;

    // check if user exists
    const user = await userModel.findOne({
        username: username
    })
    if (!user) {
        return res.status(404).json({ message: "Invalid username or password" });
    }

    // check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(404).json({ message: "Invalid username or password" });
    }

    // create JWT token
    const token = jwt.sign({
        userId: user._id,
        email: user.email,
        username: user.username,
    },
    process.env.JWT_SECRET, 
    { expiresIn: '1h' });

    res.cookie('token', token)
    

    res.redirect("/home");

})

// url - /user/logout
router.get('/logout', (req, res) => {
    // Here you would typically handle user logout logic
    // For example, you might clear the session or token
    
    // Verify the token
    res.clearCookie('token');
    // Clear the cookie
    if (!req.cookies.token) {
        return res.status(400).json({ message: "No user is logged in" });
    }
    const token = req.cookies.token;

    res.redirect('/');
})

module.exports = router;