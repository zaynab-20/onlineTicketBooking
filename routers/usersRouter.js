const router = require('express').Router();

const {createUser,getAllUser} = require('../Controllers/userController');

router.post("/createUser",createUser),

router.get("/getAllUser",getAllUser)

module.exports = router;

