const model = require('./profile-model');

const getCurrentProfile = (id) => model.findOne({ id: id })
const createProfile = (profile) => model.create(profile)
const updateCurrentProfile = (id, profile) => model.updateOne({ 'id': id },
    { $set: profile });

module.exports = {
    getCurrentProfile, updateCurrentProfile, createProfile
};