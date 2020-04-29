// write the CRUD code in this file
const express = require('express');
// const app = express();
const eventRoute = express.Router();
// add the event model 
let Event = require('../models/Event');
// define the routes
eventRoute.route('/add').post(function(req, res){
    let event = new Event(req.body);
    event.save().then(event => {
        res.status(200).json({'event': 'event addedd successfuly!'});
    }).catch(err => {
        res.status(400).send('unable to connect');
    });
});

// get route
eventRoute.route('/').get(function(req, res){
    Event.find(function(err, event){
        if(err){
            console.log(err);
        }
        else{
            res.json(event);
        }
    });
});

// get by id
eventRoute.route('/get/:id').get((req, res) => {
    let id = req.params.id;
    Event.findById(req.params.id, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});

// edit:id
eventRoute.route('/edit/:id').get(function(req, res){
    let id = req.params.id;
    Event.findById(id, function(event){
        res.json(event);
    });
});

// update:id
eventRoute.route('/update/:id').post(function(req, res){
    Event.findById(req.params.id, function(err, event){
        if(!event)
        {
            return new Error('Could not load document!');
        }
        else
        {
            event.event_name = req.body.event_name;
            event.event_place = req.body.event_place;
            event.event_date = req.body.event_date;

            event.save().then(event => {
                res.json('Update complete!');
            }).catch(err => {
                res.status(400).send('Unable to update!');
            });
        }
    });
});

// Define delete | remove 
eventRoute.route('/delete/:id').get(function(req, res){
    Event.findByIdAndDelete({_id: req.params.id}, function(err){
        if (err) res.json(err);
        else res.json('Deleted successfully!');
    });
});

module.exports = eventRoute;

