export class Matrix {
  constructor(matrix) {
    this._rows = matrix.split('\n').map((el) => {
      return el.split(' ').map((el) => +el);
    });
    this._columns = this.rowsToColumns();
  }

  rowsToColumns = () => {
    const columns = [];

    for (let i = 0; i < this._rows[0].length; i++) {
      const column = [];
      columns.push(column);
      for (let j = 0; j < this._rows.length; j++) {
        column.push(this._rows[j][i]);
      }
    }

    return columns;
  };

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}


/* A neater solution found:
Rows: this._rows = input.split('\n').map((f) => f.split(' ').map(Number));
Columns: return this._rows[0].map((col, i) => this._rows.map(row => row[i])); */
