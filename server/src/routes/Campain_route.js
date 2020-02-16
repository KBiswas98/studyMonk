const express = require('express');
const router = express.Router();
const Campaincontroller = require('../controllers/Campain_controller');

router.get('/', Campaincontroller.showCampain);
router.get('/:id', Campaincontroller.singleCampain);
router.post('/add', Campaincontroller.addCampain);
router.patch('/update', Campaincontroller.updateCampain);
router.delete('/remove/:id', Campaincontroller.deleteCampain); 

module.exports = router;