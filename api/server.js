const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'), 
mongoose = require('mongoose'),
config = require('./DB');
const eventRoute = require('./routes/event.route');

// connect to MongoDB 
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { userNameUriParser: true}).then(
    () => {console.log('Database is connected!')},
    err => {console.log('Can not connect to DB ' + err)}
);


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/event', eventRoute);
let port = process.env.PORT || 4000; 

app.listen(port, function(){
    console.log('Listening on port ' + port)
});


