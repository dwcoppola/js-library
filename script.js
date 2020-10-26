const bookcase = document.getElementById('bookcase');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
       return `${title} by ${author}, ${pages} pages, ${read}`;
    };
}
showForm = () => {
    form = document.getElementById('form');
    form.setAttribute('style','display: flex; flex-direction: column;');
    ab = document.getElementById('add-button');
    ab.setAttribute('style','display: none;')
}
addBookToLibrary = () => {  
if (title.value !== '' && author.value !== '' && pages.value !== '' && read.value !== '') {
    myLibrary[myLibrary.length] = new Book(title.value, author.value, pages.value, read.checked);
var book = document.createElement('div');
    bookcase.appendChild(book);
    book.setAttribute('class','book');
var bookTitle = document.createElement('p');
    book.appendChild(bookTitle);
    bookTitle.textContent = title.value;
var bookAuthor = document.createElement('p');
    book.appendChild(bookAuthor);
    bookAuthor.textContent = `by ${author.value}`;
var bookPages = document.createElement('p');
    book.appendChild(bookPages);
    bookPages.textContent = `${pages.value} pages`;
var bookRead = document.createElement('p');
    book.appendChild(bookRead);
    if (read.checked === true) { 
        bookRead.textContent = 'Read!';
    }
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
    } else {
    alert("You can't leave required fields blank.");
    }
}