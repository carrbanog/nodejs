// 요청 객체(req) 살펴보기  (결과 비교 파일 : 04\results\server-2.js)

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain");
  res.write("Hello Node");
  res.end();
  console.log(req);
  // console.log(res);
});

server.listen(3000, () => {
  console.log("서버가 실행중");
});
