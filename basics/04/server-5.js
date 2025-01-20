// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  //const url = req.url;
  //const method = req.method;
  console.log(url);
  console.log(method);
  res.setHeader("content-type", "text/plain");

  if (method === "GET" && url === "/home") {
    res.write("Home");
    res.end();
  } else if (method === "GET" && url === "/about") {
    res.end("About");
  } else {
    res.end("not found");
  }
});

server.listen(3000, () => {
  console.log("서버가 실행중입니다.");
});
