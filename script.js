let myLibrary = ["John", "Doe", 50, "To Read"];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBook() {
  const input = document.querySelectorAll("input");
  let book = [];
  input.forEach((input) => {
    book.push(input.value);
  });
  book.push("To Read");
  newBook = new Book(book[0], book[1], book[2], book[3]);
  const tbody = document.querySelector("tbody");
  const row = document.createElement("tr");
  tbody.appendChild(row);
  for (let key in newBook) {
    const cell = document.createElement("td");
    cell.innerHTML = newBook[key];
    row.appendChild(cell);
  }
  input.forEach((input) => {
    input.value = "";
  });
}

function test() {
  const tbody = document.querySelector("tbody");
  const row = document.createElement("tr");
  tbody.appendChild(row);
  for (i = 0; i < myLibrary.length; i++) {
    const cell = document.createElement("td");
    cell.innerHTML = myLibrary[i];
    row.appendChild(cell);
  }
}

test();
