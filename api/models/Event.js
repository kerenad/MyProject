const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
    event_name:{
        type: String
    },
    event_place: {
        type: String
    },
    event_date:{
        type: String
    }},{ 
        collection: 'event'
    });

 module.exports = mongoose.model('Event', Event);
 

 