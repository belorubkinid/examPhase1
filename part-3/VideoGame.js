const { SudjectOfLease } = require('./SubjectOfLease');

class VideoGame extends SudjectOfLease {
  constructor(options = {}) {
    super(options.title);
    this.platform = options.platform;
    this.developer = options.developer;
    this.genre = options.genre;
  }

  returnGame() {
    super.returnSubject();
  }
}

module.exports = { VideoGame };
