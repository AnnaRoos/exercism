export class BankAccount {
  constructor() {
    this.accountBalance;
    this.isOpen = false;
  }

  open() {
    if (this.isOpen) {
      throw new ValueError();
    }
    this.accountBalance = 0;
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = false;
  }

  deposit(amount) {
    if (!this.isOpen || amount < 0) {
      throw new ValueError();
    }
    return (this.accountBalance += amount);
  }

  withdraw(amount) {
    if (!this.isOpen || amount > this.accountBalance || amount < 0) {
      throw new ValueError();
    }
    return (this.accountBalance -= amount);
  }

  get balance() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    return this.accountBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
