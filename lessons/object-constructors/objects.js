function theHobbit(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let result = "";
    if (!this.read) {
      result = `${this.title}, by ${this.author}, ${this.pages} pages, not read yet`;
    } else {
      result = `${this.title}, by ${this.author}, ${this.pages} pages, reading it`;
    }
    return console.log(result);
  };
}

const reader1 = new theHobbit("The Hobbit", "J.R.R Tolkien", 295, false);
const reader2 = new theHobbit("Atomic Habits", "James Clear", 200, true);
reader1.info();
reader2.info();

console.log(theHobbit);
