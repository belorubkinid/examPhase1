const { SudjectOfLease } = require('./SubjectOfLease');

class Book extends SudjectOfLease {
  constructor(options = {}) {
    super(options.title);
    this.length = options.length;
    this.author = options.author;
    this.format = options.format;
    this.language = options.language;
  }

  returnBook() {
    super.returnSubject();
  }
}

module.exports = { Book };
