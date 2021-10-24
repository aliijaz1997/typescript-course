let personName = "Hifz";
let isLoggedIn = true;
personName += "Lorum";
console.log(personName);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;
const names: string[] = personName.split("");
console.log(names);

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
console.log(ids[10]);
