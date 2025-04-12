const express = require('express')
const router = express.Router()
const workoutsController = require('../controllers/workoutsController')

router.get('/workouts',workoutsController.getAll)
router.post('/workouts/create',workoutsController.createOne)
router.delete('/workouts/delete/:id',workoutsController.deleteOne)
router.patch('/workouts/update/:id',workoutsController.updateOne)


module.exports = router