const mongoose = require('mongoose');
const schema = mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "handle": String,
    "profilePicture": String,
    "profilePicture": String,
    "bannerPicture": String,
    "bio": String,
    "website": String,
    "location": String,
    "dateOfBirth": String,
    "dateJoined": String,
    "followingCount": Number,
    "followersCount": Number,
    "tweets": Number,
    "id": String

}, { collection: "profiles" });
module.exports = schema;
