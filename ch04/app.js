var add = function (num1, num2) {
    num1.toUpperCase(); // any 타입이기때문에 이런 상황도 발생할수있다
    return num1 + num2;
};
add(3, 5);
add(3, "asdf");
add("qwer", true);
// any 타입이기때문에 셋다 에러가 없다
var add2 = function (num1, num2) {
    // num1.toUpperCase();  타입이 선언되었기때문에 에러가 발생한다
    return num1 + num2;
};
add(3, 5);
// add(3, "asdf");
// add("qwer", true);
// 타입이 선언되었기때문에 에러가 발생한다
var dummyFn = function (str) {
    if (str === void 0) { str = "messi"; }
    return str;
};
dummyFn();
var add3 = function (num1, num2) {
    num1 + num2;
};
console.log(add3(1, 2));
var dummyArr = ["messi", "pedri"];
dummyArr.map(function (dummy) {
    return dummy.toLowerCase();
});
var errorMsg = function (msg) {
    // return msg; 에러 발생
    throw new Error("절대 반환되어서는 안되는 함수!");
};
