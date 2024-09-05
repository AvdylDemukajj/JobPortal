const express = require('express');
const router = express.Router();
const { allUsers, singleUser, editUser, deleteUser, createUserJobsHistory } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// User routes
// /api/allusers
router.get('/allusers', isAuthenticated, isAdmin, allUsers);

