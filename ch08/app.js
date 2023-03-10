var defaultArr = [1, 2, "messi", "pedri", 5];
var tuplesArr = ["messi", 1];
// const tuplesArr2: [string, number] = ["messi", 1, 2];  에러(길이 초과)
//const tuplesArr3: [string, number] = [1, "messi"]; 에러(순서 다름)
var tuplesArr4 = ["messi", 1];
// tuplesArr4[2] = "messi" 에러
tuplesArr4.push("pedri"); // 에러 x
var DummyEn;
(function (DummyEn) {
    DummyEn[DummyEn["MESSI"] = 0] = "MESSI";
    DummyEn[DummyEn["PEDRI"] = 1] = "PEDRI";
    DummyEn[DummyEn["DEJONG"] = 2] = "DEJONG";
})(DummyEn || (DummyEn = {}));
var dummy = DummyEn.MESSI;
