interface Coordinate {
  x: number;
  y: number;
}
// function parseCoordinateFromObject(object: Coordinate): Coordinate {
//   return {
//     ...object,
//   };
// }
// function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
//   return {
//     x,
//     y,
//   };
// }
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coordinate: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "object") {
    coordinate = {
      ...(arg1 as Coordinate),
    };
  } else {
    coordinate = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coordinate;
}

console.log(parseCoordinate(123, 456));
console.log(parseCoordinate({ x: 1234, y: 1234 }));
