const express = require('express');
const router = express.Router();
const { signup, signin, logout, userProfile } = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/auth');

// Auth routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);

