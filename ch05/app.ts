const dummyObj: {
  name: string;
  age: number;
} = {
  name: "messi",
  age: 36,
};

const dummyFn = (num1: number, num2: number): { add: number; sub: number } => {
  return { add: num1 + num2, sub: num1 - num2 };
};

const dummyFn2 = (person: { first: string; last: string }): void => {
  console.log(`${person.first} / ${person.last}`);
};
// dummyFn2({first: "messi", last: "pedri", dummy: "dejong"}) 에러
const dummyObj2 = { first: "messi", last: "pedri", dummy: "dejong" };
dummyFn2(dummyObj2); // 에러 x

type DummyType = {
  x: number;
  y: number;
};
let coordinate: { x: number; y: number } = { x: 32, y: 30 };
let coordinate2: DummyType = { x: 32, y: 30 };
// 같은 코드다

const dummyFn3 = (dummyPara: DummyType2): void => {
  dummyPara.name = "messi";
  dummyPara.age = 36;
  dummyPara.state.goal = 40;
  dummyPara.state.as = 20;
  dummyPara.state.team = "PSG";
};
type DummyType2 = {
  name: string;
  age: number;
  state: {
    goal: number;
    as: number;
    team: string;
  };
};

type DummyType3 = {
  name: string;
  age: number;
  team: string;
};
// const myPlayer1: DummyType3 = {name: "messi", age: 36}; 에러
type DummyType4 = {
  name: string;
  age: number;
  team?: string;
};
const myPlayer1: DummyType4 = { name: "messi", age: 36 }; // 에러 x

let dummyObj3: {
  readonly id: number;
  name: string;
} = {
  id: 123,
  name: "messi",
};
// dummyObj3.id = 123; 에러

type Loc = {
  x: number;
  y: number;
};
type Color = {
  color: string;
};
type LocationMark = Loc & Color;
const mark1: LocationMark = {
  x: 32,
  y: 30,
  color: "red",
};
