const router = require('express').Router();

const {createBooking, getAllBooking} = require('../Controllers/bookingsController');

router.post('/createBooking/:id',createBooking)
router.get('/getAllBooking/:id',getAllBooking)



module.exports = router;