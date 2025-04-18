const express = require('express')
const router = express.Router()
const workoutsController = require('../controllers/workoutsController')
const { requireAuth } = require('../middleware/requireAuth')



application.use(requireAuth)
router.get('/',workoutsController.getAll)
router.get('/:id',workoutsController.getOne)
router.post('/create',workoutsController.createOne)
router.delete('/delete/:id',workoutsController.deleteOne)
router.patch('/update/:id',workoutsController.updateOne)

module.exports = router