// 순서대로 실행하기

function displayA() {
  console.log("A");
}
function displayB(callback) {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 2000);
}
function displayC() {
  console.log("C");
}

displayA();
displayB(displayC);
