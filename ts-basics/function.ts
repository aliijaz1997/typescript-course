export function getName(user?: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
//functional chaining
console.log(getName());
// when parameters are provided the output will be the provided parameters
