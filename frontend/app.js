import './styles/style.css';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
	const ui = new UI();
	ui.renderBooks();
})

const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;
	const image = document.getElementById('image').files;

	const formDate = new FormData();
	formDate.append('image',image[0]);
	formDate.append('title',title);
	formDate.append('isbn',isbn);
	formDate.append('author',author);

	const ui = new UI();
	ui.addNewBook(formDate);
	ui.renderMessage('New Book Add','success',3000);
	e.preventDefault();
});

const newBookDisplay = document.getElementById('books-card');
newBookDisplay.addEventListener('click',(e) => {
	if (e.target.classList.contains('delete')) {
		const deleteId = e.target.getAttribute('_id');
		const ui = new UI();
		ui.deleteBook(deleteId);
		ui.renderMessage('Book Remove','danger',3000);

	}
	e.preventDefault();
});