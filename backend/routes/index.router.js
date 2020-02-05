const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlBarcode = require('../controllers/barcode.controller');
const ctrlPusher = require('../controllers/pusher.controller');

const jwtHelper = require('../config/jwtHelper');

// user routes
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userprofile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

//barcode routes
router.get('/barcode/:partCode', ctrlBarcode.getBarcode);
router.post('/barcode', ctrlBarcode.addBarcode);

// pusher router
router.post('/pusher/auth', ctrlPusher.auth);

module.exports = router;
