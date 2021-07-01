export class GradeSchool {
  #students;
  constructor() {
    this.#students = {};
  }


  roster() {
    const studentRoster = JSON.parse(JSON.stringify(this.#students));
    return studentRoster;
  }

  add(name, grade) {
    
    for (const key in this.#students) {
      let filteredArray = this.#students[key].filter(
        (student) => student !== name
      );
      this.#students[key] = filteredArray;
    }

    if (Object.keys(this.#students).includes(grade.toString())) {
      this.#students[grade] = [...this.#students[grade], name].sort();
    } else {
      this.#students[grade] = [name];
    }
    return;
  }

  grade(grade) {
    const studentRoster = JSON.parse(JSON.stringify(this.#students));
    if (!studentRoster[grade]) {
      return [];
    }
    return studentRoster[grade];
  }
}
