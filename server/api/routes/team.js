const TeamMember = require('../../models/teamMember')

module.exports = function (router) {
    // Get: List of Team Members
    router.get('/team', function (req, res) {

    })


    // POST: Create TeamMembers...
    router.post('/team', function (req, res) {
        let member = new TeamMember(req.body)
        member.save(function (err, member) {
            if (err) {
                return res.status(400).json(err)
            }
            res.status(200).json(member)
        })
    })

}