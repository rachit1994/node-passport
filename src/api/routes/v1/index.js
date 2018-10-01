const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const propertyRoutes = require('./property.route');
const visitRoutes = require('./visits.route');
const BookingRoutes = require('./booking.route');
const verificationRoutes = require('./verify.route');
const generationRoutes = require('./generate.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);
router.use('/properties', propertyRoutes);
router.use('/auth', authRoutes);
router.use('/verify', verificationRoutes);
router.use('/generate', generationRoutes);
router.use('/visits', visitRoutes);
router.use('/bookings', BookingRoutes);

module.exports = router;
