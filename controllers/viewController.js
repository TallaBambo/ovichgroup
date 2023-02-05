
exports.getHomePage = async (req, res) => {
    res.status(200).render('home', {
        title: 'The mirror of the world',
    })
}

exports.getPage = async (req, res) => {
    res.status(200).render(req.params.template, {
        title: req.params.template.toUpperCase().split('-').join(' '),
    })
}