var age = 23;
age = 20;
age = "25";
age = true;
var coordinates = { x: 20, y: 30 };
coordinates = { lat: 123.456, long: 321.123 };
var printAge = function (age) {
    console.log("\uB2F9\uC2E0\uC758 \uB098\uC774\uB294 ".concat(age, "\uC0B4 \uC785\uB2C8\uB2E4"));
};
printAge(23);
printAge("messi");
var calcTax = function (price, tax) {
    // price는 숫자인지 문자열인지 모름
    if (typeof price === "string") {
        // price는 문자열임
        price = price.replace("원", "");
        return +price;
        // price는 숫자가됨
    }
    return price * tax;
};
var mixArr = [1, 2, "messi"];
var zero = 0;
// zero = 2; 에러
var getAnswer = function (answer) {
    return console.log(answer);
};
getAnswer("yes"); // ok
// getAnswer("messi"); // 에러
