if (process.env.NODE_ENV == 'devolopment') {
	const dotenv = require('dotenv').config();
	console.log(process.env.NODE_ENV);
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');


// Inicializations
const app = express();
require('./database.js')

// Settings
const PORT = process.env.PORT || 4000;

// Middlewere
app.use(morgan('dev'));
const storage = multer.diskStorage({
	destination: path.join(__dirname,'/public/upload'),
	filename(req,file,cb){
		cb(null,new Date().getTime() + path.extname(file.originalname));
	}
});
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/books',require('./routes/books.js'));

// Static Files
app.use(express.static(path.join(__dirname,'/public')));

// Start Server
app.listen(PORT, () => {
	console.log('Server Ready Perro!!',PORT);
})