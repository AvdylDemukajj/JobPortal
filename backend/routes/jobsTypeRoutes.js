const express = require('express');
const router = express.Router();
const { createJobType, allJobsType, updateJobType, deleteJobType } = require('../controllers/jobsTypeController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
