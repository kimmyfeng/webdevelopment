// let tweets = require('../data/tweets.json');
const dao = require('../db/tweets/tweet-dao');
var mongoose = require('mongoose');
module.exports = (app) => {

    const findAllTweets = (req, res) => dao.findAllTweets()
        .then(tweets => res.json(tweets));

    const postNewTweet = (req, res) => {
        var ObjectID = require('mongodb').ObjectID;
        let newTweet = {
            _id: new ObjectID(),
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
            "title1st": req.body.tweet,
            ...req.body,
            "loved": false,

        }
        console.log(newTweet)
        dao.createTweet(newTweet)
            .then(tweets => res.json(tweets));
    }
    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        dao.deleteTweet(id)
            .then(tweets => res.json(200));
    }
    const likeTweet = (req, res) => {
        const id = req.params['id'];
        dao.findAllTweets()
            .then(tweets => {
                let newTweet = {}
                tweets.forEach(tweet => {
                    if ((tweet._id + '') == id) {
                        if (tweet.loved) {
                            tweet.loved = false;
                            tweet.love--;
                        } else {
                            tweet.loved = true;
                            tweet.love++;
                        }
                        newTweet = tweet
                    }
                });
                dao.updateTweet(id, newTweet)
                    .then(tweets => res.json(200));
            });
    }
    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.get('/api/tweets', findAllTweets);
    app.post('/api/tweets', postNewTweet);
};
