// 문제 1
let highScore: number | string;

// 문제 2
let mixArr: (number | string)[];

// 문제 3
type SkillLevel = "Beginer" | "Intermediate" | "Advanced" | "Expert";

// 문제 4
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

// 문제 5
type RGBColor = {
  r: number;
  g: number;
  b: number;
};
type HSLColor = {
  h: number;
  s: number;
  l: number;
};
let colorArr: (RGBColor | HSLColor)[];

// 문제 6
const greet = (name: string | string[]): void => {
  if (typeof name === "string") {
    console.log(`당신의 이름은: ${name}`);
  } else {
    for (const n of name) {
      console.log(`당신의 이름은: ${n}`);
    }
  }
};
greet("messi");
greet(["messi", "pedri", "dejong"]);
