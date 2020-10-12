const path = require('path');

class BookService{
	constructor(){
		this.URI = 'api/books';
	}

	async getBooks() {
		const res = await fetch(this.URI);
		const books = await res.json();
		return books;
	}

	async postBook(newBook) {
		const res = await fetch(this.URI, {
			method:'POST',
			body: newBook
		});
		const data = await res.json({"message": "Saved Book"});
		console.log(data);
	}

	async deleteBook(bookId) {
		const res = await fetch(`${this.URI}/${bookId}`, {
			method: 'DELETE',
			header: {
				'content-type': 'aplication/json'
			}
		});
		const data = await res.json({"message": "Delete Book"});
		console.log(data);
	}
}

export default BookService;