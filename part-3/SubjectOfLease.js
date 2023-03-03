class SudjectOfLease {
  constructor(title) {
    this.title = title;
  }

  isAvailable() {
    return !this.isCheckedOut();
  }

  checkout() {
    this.checkedOut = true;
  }

  isCheckedOut() {
    return this.checkedOut;
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

  returnSubject() {
    this.checkedOut = false;
  }
}

module.exports = { SudjectOfLease };
