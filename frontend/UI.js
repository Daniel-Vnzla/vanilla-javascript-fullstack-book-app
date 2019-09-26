import BookService from './services/bookService.js';
const bookService = new BookService();

import { format } from 'timeago.js';

class UI {
	async renderBooks(){
		const books = await bookService.getBooks();
		const newBookDisplay = document.getElementById('books-card');
		newBookDisplay.innerHTML = '';
		books.forEach( book => {
			const div = document.createElement('div');
			div.className = '';
			div.innerHTML = `
			<div class="card m-2">
				<div class="row">
					<div class="col-md-4">
						<img src="${book.imgPath}" alt="" class="img-fluid">
					</div>
					<div class="col-md-8">
						<div class="card-block px-2">
							<h4>${book.title}</h4>
							<p class="card-title">${book.author}<p>
							<a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
						</div>
					</div>
				</div>
				<div class="card-footer">
					${format(book.created_at)}
				</div>
			</div>
			`;
			newBookDisplay.appendChild(div);
		});

	
	}

	async addNewBook(book){
		await bookService.postBook(book);
		this.clearBoookFrom();
		this.renderBooks();
	}

	clearBoookFrom() {
		document.getElementById('book-form').reset();
	}

	renderMessage(message,colorMessage,secondsToRemove){
		const div = document.createElement('div');
		div.className = `alert alert-${colorMessage} message`;
		div.appendChild(document.createTextNode(message));

		const container = document.querySelector('.col-md-4');
		const bookForm = document.querySelector('#book-form');

		container.insertBefore(div,bookForm);
		setTimeout(() => {
			document.querySelector('.message').remove();
		},secondsToRemove)
	}

	async deleteBook(bookId){
		await bookService.deleteBook(bookId);
		this.renderBooks();
	}
}

export default UI;