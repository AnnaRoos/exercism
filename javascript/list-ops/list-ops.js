export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    this.values = [...this.values, ...list.values];
    return this;
  }

  concat(lists) {
    let newValues = [];
    for (const list of lists.values) {
      if (list.values) {
        newValues = [...newValues, ...list.values];
      }
    }
    this.values = [...this.values, ...newValues];
    return this;
  }

  filter(fn) {
    let filtered = [];
    for (const value of this.values) {
      if (fn(value)) {
        filtered = [...filtered, value];
      }
    }
    this.values = filtered;
    return this;
  }

  map(fn) {
    let mapped = [];
    for (const value of this.values) {
      mapped = [...mapped, fn(value)];
    }
    this.values = mapped;
    return this;
  }

  length() {
    let count = 0;
    for (const value of this.values) {
      if (value) {
        count++;
      }
    }
    return count;
  }

  foldl(fn, number) {
    let reduced = number;
    for (const value of this.values) {
      reduced = fn(reduced, value);
    }
    return reduced;
  }

  foldr(fn, number) {
    let reduced = number;
    let reversed = [];
    for (const value of this.values) {
      reversed = [value, ...reversed];
    }
    for (const value of reversed) {
      reduced = fn(reduced, value);
    }
    return reduced;
  }

  reverse() {
    let reversed = [];
    for (const value of this.values) {
      reversed = [value, ...reversed];
    }
    this.values = reversed;
    return this;
  }
}
