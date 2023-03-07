const add = (num1, num2) => {
  num1.toUpperCase(); // any 타입이기때문에 이런 상황도 발생할수있다
  return num1 + num2;
};
add(3, 5);
add(3, "asdf");
add("qwer", true);
// any 타입이기때문에 셋다 에러가 없다

const add2 = (num1: number, num2: number): number => {
  // num1.toUpperCase();  타입이 선언되었기때문에 에러가 발생한다
  return num1 + num2;
};
add(3, 5);
// add(3, "asdf");
// add("qwer", true);
// 타입이 선언되었기때문에 에러가 발생한다

const dummyFn = (str: string = "messi") => {
  return str;
};
dummyFn();

const add3 = (num1: number, num2: number) => {
  num1 + num2;
};
console.log(add3(1, 2));

const dummyArr = ["messi", "pedri"];
dummyArr.map((dummy) => {
  return dummy.toLowerCase();
});

const errorMsg = (msg: string): never => {
  // return msg; 에러 발생
  throw new Error("절대 반환되어서는 안되는 함수!");
};
