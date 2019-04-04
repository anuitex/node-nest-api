module.exports.login = function (req, res) {
    res.status(200).json({
        login: {
            name: req.body.name,
            password: req.body.password
        }
    })
}

module.exports.register = function (req, res) {
    res.status(200).json({
        register: 'from controller'
    })
}