const express = require('express')
const router = express.Router()
const workoutsController = require('../controllers/workoutsController')

router.get('/workouts',workoutsController.getAll)
router.post('/workouts/create',workoutsController.createOne)
router.post('/workouts/delete/:id',workoutsController.deleteOne)
router.post('/workouts/update/:id',workoutsController.updateOne)


module.exports = router