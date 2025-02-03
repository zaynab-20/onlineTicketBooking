const router = require('express').Router();

const {createSeat,bookedSeat} = require('../Controllers/seatsController');

router.post("/createSeat/:id",createSeat),


router.post("/bookedSeat/:id",bookedSeat)

module.exports = router;