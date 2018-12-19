
const Standup = require('../../models/standup')
module.exports = function (router) {
    // Get: the 12 newest stand-up meeting notes
    router.get('/standup', function (req, res) {

    })

    // POST: Get new meeting note document
    router.post('/standup', function (req, res) {
        let note = new Standup()
    })
}