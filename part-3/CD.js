const { SudjectOfLease } = require('./SubjectOfLease');

class CD extends SudjectOfLease {
  constructor(options = {}) {
    super(options.title);
    this.runtime = options.runtime;
    this.artist = options.artist;
    this.label = options.label;
  }

  returnCD() {
    super.returnSubject();
  }
}

module.exports = { CD };
