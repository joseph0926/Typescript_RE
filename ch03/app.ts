// 타입 애너테이션
let title: string = "Barcelona";
title = "Real";
// title = 5; 에러

const dummyArr = ["messi", "pedri"];
let asdf;
for (const dummy of dummyArr) {
  if (dummy === "messi") {
    asdf = "messi";
  }
}
console.log(typeof asdf);
// any 타입으로 나온다
