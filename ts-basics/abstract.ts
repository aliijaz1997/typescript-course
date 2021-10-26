// abstract class Personnn {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   display(): void {
//     console.log(this.name);
//   }

//   abstract find(name: string): Personnn;
// }

// class Employee extends Personnn {
//   empCode: number;

//   constructor(name: string, code: number) {
//     super(name);
//     this.empCode = code;
//   }

//   find(name: string): Personnn {
//     return new Employee(name, 1);
//   }
// }

// let emp: Personnn = new Employee("James", 100);
// emp.display(); //James

// let emp2: Personnn = emp.find("Steve");

abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Hadoken";
  }
  get name(): string {
    return "Ryu";
  }
}

const ryu = new Ryu();

ryu.fight();
