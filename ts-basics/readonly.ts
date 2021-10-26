interface Cat {
  name: string;
  breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  };
}

const usul = makeCat("Usul", "Tabby");
// usul.name = "Piter"; we cant assign as the return type is readonly so it can only be read

class Personnn {
  constructor(public readonly name: string, public readonly age: number) {}
}

const person1 = new Personnn("Hifz ur Rehman", 24);
// lgg.name = "Foo"; willl not work as the readonly
console.log(person1.name);

class StudentList {
  private persons: Personnn[] = [];

  static instance: StudentList = new StudentList();

  private constructor() {}
  // setter
  static addPerson(person: Personnn) {
    StudentList.instance.persons.push(person);
  }
  //getter
  getAllPersons() {
    return this.persons;
  }
}

StudentList.addPerson(person1);
console.log(StudentList.instance.getAllPersons());
