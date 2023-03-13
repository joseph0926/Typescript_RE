console.log("hello");

const btn = document.getElementById("btn")!;
btn?.addEventListener("click", () => {
  console.log("messi");
});

const str: unknown = "messi";
const dummyStr = (str as string).toUpperCase();

const form = document.querySelector("form");

/* form?.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submit");
});
// 이 방식은 event가 SubmitEvent 타입이라는것을 타입스크립트가 추측한다

const submitHandler = (event) => {
  event.preventDefault();
  console.log("Submit");
};
form.addEventListener("submit", submitHandler);
// 반면, 이 방식은 타입스크립트가 event가 무슨 타입인지 모른다. 따라서,
const submitHandler = (event: SubmitEvent) => {}
// 이렇게 선언해줘야한다 */
