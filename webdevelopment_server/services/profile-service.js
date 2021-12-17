
const dao = require('../db/profile/profile-dao');
var mongoose = require('mongoose');
module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        dao.getCurrentProfile('1')
            .then(profile => {
                console.log(profile, "profile")
                if (profile == null) {
                    let data = {
                        firstName: 'Jose',
                        lastName: 'Annunziato',
                        handle: 'jannunzi',
                        profilePicture: 'jose.png',
                        bannerPicture: 'polyglot.png',
                        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retweets and likes are not endorsements.',
                        website: 'youtube.com/webdevtv',
                        location: 'Boston, MA',
                        dateOfBirth: '7/7/1968',
                        dateJoined: '4/2009',
                        followingCount: 312,
                        followersCount: 180,
                        tweets: 488,
                        id: '1',
                    }
                    dao.createProfile(data).then(profile => {
                        res.json(data)
                    });
                } else {
                    res.json(profile)

                }
            });
    }
    const updateCurrentProfile = (req, res) => {
        const profiledata = req.body;
        dao.updateCurrentProfile('1', profiledata)
            .then(data => {
                dao.getCurrentProfile('1')
                    .then(profile => {
                        res.json(profile)
                    });
            });

    }
    app.put('/api/profile', updateCurrentProfile);
    app.get('/api/profile', getCurrentProfile);
};