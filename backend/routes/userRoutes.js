const express = require('express');
const router = express.Router();
const { allUsers, singleUser, editUser, deleteUser, createUserJobsHistory } = require('../controllers/userController');
