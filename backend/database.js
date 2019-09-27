const mongoose = require('mongoose');

const database = process.env.MONGODB_URI; 

mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('Db is Connected'))
.catch(err => console.log(err));

