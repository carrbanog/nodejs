// fs 모듈의 readFile 함수 연습하기 (결과 비교 파일은 03\results\read-3.js)

const fs = require("fs");
// fs.readFile("./example.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(data);
//   fs.writeFile("./test2.txt", data, (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("test is saved");
//   });
// });
fs.writeFile("./test.txt", "안녕하세요22", (err) => {
  if(err){
    console.log(err);
  }
  console.log("test is saved");
})