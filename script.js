document.addEventListener('DOMContentLoaded', function() {
    const myLibrary = []
    const display = document.querySelector(".display")

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
    this.info = function() {
        
    }
    
    addBookToLibrary(this)
    displayBook(this)

}
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true)
const book2 = new Book('1984', 'George Orwell', 328, false);


function addBookToLibrary(book) {
    myLibrary.push(book)
}



    
    document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('readInput').checked;
    let str = new Book(title,author,pages,read)
}) 



function displayBook(book) {
    const card = document.createElement("div")
    card.className = "card"
    card.classList.add(book.read ? "alreadyread" : "haventread");
    display.appendChild(card)

    const title = document.createElement("div")
    title.className = "title"
    title.textContent = book.title
    card.appendChild(title)

    const author = document.createElement("div")
    author.className = "author"
    author.textContent = book.author 
    card.appendChild(author)

    const pages = document.createElement("div")
    pages.className = "pages"
    pages.textContent = `${book.pages} pages` 
    card.appendChild(pages)

    const readBtn = document.createElement("button")
    readBtn.classList.add("readbtn")
    readBtn.textContent = (book.read ? "already read" : "haven't read")
    card.appendChild(readBtn)

    readBtn.addEventListener("click", function() {
        book.read = !book.read;
        readBtn.textContent = book.read ? "already read" : "haven't read";
        card.classList.toggle("alreadyread", book.read);
        card.classList.toggle("haventread", !book.read);

    })
    const delBtn = document.createElement( "button" )
    delBtn.className = "del"
    delBtn.textContent = "delete"
    card.appendChild(delBtn)
    delBtn.addEventListener("click", function() {
        display.removeChild(card)
        const idx = myLibrary.indexOf(book);
            if (idx > -1) {
                myLibrary.splice(idx, 1);
            }
    })
}
})