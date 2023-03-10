const defaultArr: (string | number)[] = [1, 2, "messi", "pedri", 5];

const tuplesArr: [string, number] = ["messi", 1];
// const tuplesArr2: [string, number] = ["messi", 1, 2];  에러(길이 초과)
//const tuplesArr3: [string, number] = [1, "messi"]; 에러(순서 다름)

const tuplesArr4: [string, number] = ["messi", 1];
// tuplesArr4[2] = "messi" 에러
tuplesArr4.push("pedri"); // 에러 x

enum DummyEn {
  MESSI,
  PEDRI,
  DEJONG,
}
const dummy = DummyEn.MESSI;
