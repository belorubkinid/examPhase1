const { SudjectOfLease } = require('./SubjectOfLease');

class Movie extends SudjectOfLease {
  constructor(options = {}) {
    super(options.title);
    this.runtime = options.runtime;
    this.format = options.format;
  }

  returnMovie() {
    super.returnSubject();
  }
}

module.exports = { Movie };
