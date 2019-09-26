const { Schema, model } = require('mongoose');

//Estructura de los datos en la base de datos
const BookSchema = new Schema({
	title: {type: String, require: true},
	author: {type: String, require: true},
	isbn: {type: String, require: true},
	imgPath: {type: String, require: true},
	created_at: {type: Date, default: Date.now}
});

module.exports = model('Book', BookSchema);