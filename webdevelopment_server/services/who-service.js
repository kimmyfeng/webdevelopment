const dao = require("../db/who/who-model.js");


   
module.exports = (app) => {
    const findAllWho = (req, res) =>dao.findAllWho().
        then(who => res.json(who));

    const deleteWho = (req, res) => {
        const id = req.params['mid'];
        dao.deleteWho(id)
        .then(who => res.json( 200));
    };
    const createWho = (req, res) => {
        var ObjectID = require('mongodb').ObjectID;
        let who = {
            _id:  new ObjectID(),
            ...req.body
        }
        dao.createWho(who)
        .then(who => res.json( who));
    }
    
    app.get("/rest/who", findAllWho);
    app.delete('/rest/who/:mid', deleteWho);
    app.post('/rest/who', createWho);
};
