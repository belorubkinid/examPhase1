class LibrarySystem {
  constructor(options = {}) {
    this.name = options.name;
    this.libraries = options.libraries || [];
  }

  addItem(item) {
    return this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);

    if (index > -1) {
      return this.items.splice(index, 1);
    }

    return [];
  }

  isDamaged() {
    return this.damaged;
  }

  recordDamage() {
    this.damaged = true;
  }

  repair() {
    this.damaged = false;
  }

  items() {
    return this.libraries.reduce((acc, x) => acc.concat(x.items), []);
  }

  availableItems() {
    return this.items().filter((item) => item.isAvailable() && !item.isDamaged());
  }

  unavailableItems() {
    return this.items().filter((item) => !this.availableItems().includes(item));
  }
}

module.exports = { LibrarySystem };
