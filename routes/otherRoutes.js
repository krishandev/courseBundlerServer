import express from 'express'
import { contact, courseRequest, getDashboardStats } from '../controllers/otherController.js';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js';

const router=express.Router();

//contact form

router.route('/contact').post(contact);

//Course request

router.route('/courserequest').post(courseRequest);

//Get admin dashboard stats

router.route('/admin/stats').get(isAuthenticated, authorizeAdmin, getDashboardStats)

export default router;
