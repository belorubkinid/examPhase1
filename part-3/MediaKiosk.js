const { LibrarySystem } = require('./LibrarySystem');

class MediaKiosk extends LibrarySystem {
  constructor(options = {}) {
    super();
    this.name = options.name;
    this.location = options.location;
    this.items = options.items;
  }

  availableItems() {
    return (this.items).filter((item) => item.isAvailable() && !item.isDamaged());
  }

  unavailableItems() {
    return (this.items).filter((item) => !this.availableItems().includes(item));
  }
}

module.exports = { MediaKiosk };
