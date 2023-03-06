let age: number | string | boolean = 23;
age = 20;
age = "25";
age = true;

type Point = {
  x: number;
  y: number;
};
type Loc = {
  lat: number;
  long: number;
};
let coordinates: Point | Loc = { x: 20, y: 30 };
coordinates = { lat: 123.456, long: 321.123 };

const printAge = (age: number | string): void => {
  console.log(`당신의 나이는 ${age}살 입니다`);
};
printAge(23);
printAge("messi");

const calcTax = (price: number | string, tax: number) => {
  // price는 숫자인지 문자열인지 모름
  if (typeof price === "string") {
    // price는 문자열임
    price = price.replace("원", "");
    return +price;
    // price는 숫자가됨
  }
  return price * tax;
};

const mixArr: (number | string)[] = [1, 2, "messi"];

let zero: 0 = 0;
// zero = 2; 에러

const getAnswer = (answer: "yes" | "no" | "?") => {
  return console.log(answer);
};
getAnswer("yes"); // ok
// getAnswer("messi"); // 에러
