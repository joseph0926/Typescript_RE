var dummyObj = {
    name: "messi",
    age: 36
};
var dummyFn = function (num1, num2) {
    return { add: num1 + num2, sub: num1 - num2 };
};
var dummyFn2 = function (person) {
    console.log("".concat(person.first, " / ").concat(person.last));
};
// dummyFn2({first: "messi", last: "pedri", dummy: "dejong"}) 에러
var dummyObj2 = { first: "messi", last: "pedri", dummy: "dejong" };
dummyFn2(dummyObj2); // 에러 x
var coordinate = { x: 32, y: 30 };
var coordinate2 = { x: 32, y: 30 };
// 같은 코드다
var dummyFn3 = function (dummyPara) {
    dummyPara.name = "messi";
    dummyPara.age = 36;
    dummyPara.state.goal = 40;
    dummyPara.state.as = 20;
    dummyPara.state.team = "PSG";
};
var myPlayer1 = { name: "messi", age: 36 }; // 에러 x
var dummyObj3 = {
    id: 123,
    name: "messi"
};
var mark1 = {
    x: 32,
    y: 30,
    color: "red"
};
