const router = require('express').Router();

const {createEvent,getAllEvent} = require('../Controllers/eventsController');

router.post("/createEvent",createEvent)

router.get("/getAllEvent",getAllEvent)

module.exports = router;