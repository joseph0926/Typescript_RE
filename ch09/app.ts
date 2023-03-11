interface Point {
  x: number;
  y: number;
}
const point: Point = { x: 10, y: 20 };

interface Person {
  name: string;
  age: number;
  team?: string;
  dummyFn: (num: number) => string;
}
const messi: Person = {
  name: "messi",
  age: 36,
  dummyFn: (num) => {
    return `Hi ${num}`;
  },
};

interface Person2 {
  name: string;
  age: number;
}
interface Person2 {
  team: string;
  dummyFn2: (str: string) => string;
}
interface Brca {
  dummyFn3: (str: string) => number;
}
interface Pedri extends Person2, Brca {
  goal: number;
  as: number;
}
