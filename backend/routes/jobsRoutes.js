const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs, deleteJob } = require('../controllers/jobsController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// Jobs routes
// /api/job/create
router.post('/job/create', isAuthenticated, isAdmin, createJob);
// /api/job/id
router.get('/job/:id', singleJob);

