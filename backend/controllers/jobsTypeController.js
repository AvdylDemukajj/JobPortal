const JobType = require('../models/jobTypeModel');
const ErrorResponse = require('../utils/errorResponse');

//create job category
exports.createJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.create({
            jobTypeName: req.body.jobTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
}

//all jobs category
exports.allJobsType = async (req, res, next) => {
    try {
        const jobT = await JobType.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
}









