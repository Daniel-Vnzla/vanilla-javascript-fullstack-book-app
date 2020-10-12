const mongoose = require('mongoose');

// const database = ; 

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('Db is Connected'))
.catch(err => console.log(err));

