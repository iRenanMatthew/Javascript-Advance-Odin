// function theHobbit(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     let result = "";
//     if (!this.read) {
//       result = `${this.title}, by ${this.author}, ${this.pages} pages, not read yet`;
//     } else {
//       result = `${this.title}, by ${this.author}, ${this.pages} pages, reading it`;
//     }
//     return console.log(result);
//   };
// }

// const reader1 = new theHobbit("The Hobbit", "J.R.R Tolkien", 295, false);
// const reader2 = new theHobbit("Atomic Habits", "James Clear", 200, true);
// reader1.info();
// reader2.info();

// console.log(theHobbit);

// Parent Constructor Function: Book
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add the 'info' method to Book's prototype
Book.prototype.info = function () {
  const result = this.read
    ? `${this.title}, by ${this.author}, ${this.pages} pages, reading it`
    : `${this.title}, by ${this.author}, ${this.pages} pages, not read yet`;
  console.log(result);
};

// Child Constructor Function: SelfImprovementBook
function SelfImprovementBook(title, author, pages, read, topic) {
  // Call the Book constructor to initialize shared properties
  Book.call(this, title, author, pages, read);
  this.topic = topic; // New property specific to self-improvement books
}

Object.setPrototypeOf(SelfImprovementBook.prototype, Book.prototype);

// Add a 'showTopic' method to SelfImprovementBook's prototype
SelfImprovementBook.prototype.showTopic = function () {
  console.log(`This book focuses on: ${this.topic}`);
};

// Create instances of SelfImprovementBook
const book1 = new SelfImprovementBook(
  "The 48 Laws of Power",
  "Robert Greene",
  452,
  true,
  "Power Dynamics"
);

const book2 = new SelfImprovementBook(
  "Atomic Habits",
  "James Clear",
  320,
  false,
  "Habits and Productivity"
);

// Use the methods
book1.info(); // Output: "The 48 Laws of Power, by Robert Greene, 452 pages, reading it"
book1.showTopic(); // Output: "This book focuses on: Power Dynamics"

book2.info(); // Output: "Atomic Habits, by James Clear, 320 pages, not read yet"
book2.showTopic(); // Output: "This book focuses on: Habits and Productivity"

console.log(book1.constructor);
