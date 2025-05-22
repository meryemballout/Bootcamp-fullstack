// Step 1: Create the allBooks array with 2 books
const allBooks = [
  {
    title: "Harry Potter",
    author: "jk rowling",
    image: "https://tse3.mm.bing.net/th?id=OIP.nIlBGsQgy9YbIhGK4y-BsgHaLX&pid=Api&P=0&h=180",
    alreadyRead: true
  },
  {
    title: "A Series of Unfortunate Events",
    author: " Lemony Snicket",
    image: "https://tse4.mm.bing.net/th?id=OIP.4rhpSRSwG_hrZMT2-5XYZAHaJ4&pid=Api&P=0&h=180",
    alreadyRead: false
  }
];

// Step 2: Select the section where books will be rendered
const listBooksSection = document.querySelector(".listBooks");

// Step 3: Loop through each book and render it
allBooks.forEach(book => {
  // Create a div for the book
  const bookDiv = document.createElement("div");

  // Create the text node for title and author
  const bookText = document.createElement("p");
  bookText.textContent = `${book.title} written by ${book.author}`;
  
  // If the book is already read, make the text red
  if (book.alreadyRead) {
    bookText.style.color = "red";
  }

  // Create the image element
  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.style.width = "100px";

  // Append text and image to the book div
  bookDiv.appendChild(bookText);
  bookDiv.appendChild(bookImage);

  // Append the book div to the section
  listBooksSection.appendChild(bookDiv);
});