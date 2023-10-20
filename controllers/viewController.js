const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

exports.getHomePage = catchAsync(async (req, res) => {
    res.status(200).render('home', {
        title: 'The mirror of the world',
    })
})

exports.checkTemplate = async (req, res, next) => {
    if (req.params.template == 'career' || req.params.template == 'contact' || req.params.template == 'engagement' || req.params.template == 'investors' || req.params.template == 'mission' || req.params.template == 'newsroom' || req.params.template == 'our-editions' || req.params.template == 'privacy-policy' || req.params.template == 'values' || req.params.template == 'vision' || req.params.template == 'about-ovichmedia') {
        next()
    } else {
        return next(new AppError('The page you requested for doesn\'t exist'), 404)
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

exports.getPage = catchAsync(async (req, res) => {
    const title = `${capitalizeFirstLetter(req.params.template.split('-').join(' '))}`
    res.status(200).render(req.params.template, {
        title
    })
})