const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { profileEdit, profileGet, profileAdd } = require('../controllers/profile');

//single
router.get('/:id', auth, profileGet);
//edit
router.get('/edit/:id', auth, profileEdit);
//add
router.post("/add", auth, profileAdd);

module.exports = router;