let profile = {
    "firstName": "Jose2",
    "lastName": "Annunziato",
    "handle": "jannunzi",
    "profilePicture": "jose.png",
    "bannerPicture": "polyglot.png",
    "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retweets and likes are not endorsements.",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA",
    "dateOfBirth": "7/7/1968",
    "dateJoined": "4/2009",
    "followingCount": 312,
    "followersCount": 180,
    "tweets": 488
  }
module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        console.log(profile,"3333")
        res.json(profile);
    }
    const updateCurrentProfile = (req, res) => {
        const profiledata = req.body;
        profile = profiledata;
        console.log(profile,"222")
        res.json(profile);
    }
    app.put('/api/profile', updateCurrentProfile);
    app.get('/api/profile',getCurrentProfile );
};