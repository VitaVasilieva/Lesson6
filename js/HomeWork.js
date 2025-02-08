// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім * я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
  constructor(option) {
    this.name = option.name;
    this.number = option.number;
  }

  firsName = "";
  lastName = "";
  number = "";

  set name(newName) {
    const nameRow = newName.split(" ");
    this.firsName = nameRow[0];
    this.lastName = nameRow[1];
  }

  get info() {
    return `First name: ${this.firsName}, Last name: ${this.lastName}, Number: ${this.number}`;
  }
}

const abonent1 = new Abonent({
  name: "Sara Smit",
  number: "231-564-756",
});
console.log(abonent1);

const abonent2 = new Abonent({
  name: "Orest Smit",
  number: "235-785-654",
});
console.log(abonent2);

const abonent3 = new Abonent({
  name: "Ket Smit",
  number: "235-745-654",
});
