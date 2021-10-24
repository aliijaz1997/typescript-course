export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}
export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (number) => number * 5));
// export type of function
export type MutationFunction = (v: number) => number;

export function arrayMutate1(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}
