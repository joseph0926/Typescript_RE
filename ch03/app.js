// 타입 애너테이션
var title = "Barcelona";
title = "Real";
// title = 5; 에러
var dummyArr = ["messi", "pedri"];
var asdf;
for (var _i = 0, dummyArr_1 = dummyArr; _i < dummyArr_1.length; _i++) {
    var dummy = dummyArr_1[_i];
    if (dummy === "messi") {
        asdf = "messi";
    }
}
console.log(typeof asdf);
// any 타입으로 나온다
