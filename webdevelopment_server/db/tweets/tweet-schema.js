const mongoose = require('mongoose');
const schema = mongoose.Schema({
  topic: String,
  posted: { type: Date, defaultValue: Date.now },
  userName: String,
  verified: { type: Boolean, defaultValue: false },
  handle: String,
  title: String,
  tweet: String,
  attachments: {
    image: String
  },
  time: String,
  "logo-image": String,
  "avatar-image": String,
  stats: {
    comments: { type: Number, defaultValue: 0 },
    retweets: { type: Number, defaultValue: 0 },
    likes: { type: Number, defaultValue: 0 }
  },
  image: String,
  title1st: String,
  title2nd: String,
  title3rd: String,
  content1: String,
  images: String,
  title4th: String,
  content2: String,
  link: String,
  message: String,
  trans: String,
  love: Number,
  liked: Boolean,
  loved: Boolean
}, { collection: "tweets" });
module.exports = schema;