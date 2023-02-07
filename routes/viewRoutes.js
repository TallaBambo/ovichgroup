const express = require('express')
const router = express.Router({ mergeParams: true })
const viewsController = require('../controllers/viewController')

router.get('/',
    viewsController.getHomePage)

router.get('/:template',
    viewsController.checkTemplate,
    viewsController.getPage)

module.exports = router