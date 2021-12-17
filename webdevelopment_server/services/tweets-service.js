let tweets = require('../data/tweets.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweets);
    }
    const postNewTweet = (req, res) => {
        let newTweet = {
            _id: (new Date()).getTime() + '',
            "image": "../../../images/newyorkpost.jpeg",
            "username": "New York Post",
            "time": "@nypost • 23h",
            "title1st": "Grimes seen reading Karl Marx following split with world's richest man Elon Musk",
            "title2nd": "",
            "title3rd": "",
            "content1": "...",
            // "images": "../../../images/grime.jpeg",
            "title4th": "",
            "content2": "",
            "link": "",
            "message": "0",
            "trans": "0",
            "love": "0",
            "loved": false,
            "title1st": req.body.tweet,
            ...req.body,
        }
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }
    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.filter(tweet => tweet._id !== id);
        res.sendStatus(200);
    }
    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.filter(tweet => {
            if (tweet._id == id) {
                if (tweet.loved) {
                    tweet.loved = false;
                    tweet.love--;
                } else {
                    tweet.loved = true;
                    tweet.love++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }
    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.get('/api/tweets', findAllTweets);
    app.post('/api/tweets', postNewTweet);
};