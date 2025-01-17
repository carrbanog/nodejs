// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require("path");

//join
const fullPath = path.join("some", "work", "file.txt");
console.log(fullPath)

// 경로만 추출 - dirname
const dir = path.dirname(fullPath);
console.log(`dirname: ${dir}`);
console.log(`__dirname: ${__dirname}`);//현재 실행 중인 파일의 디렉토리 절대 경로 반환

//파일 이름만 추출 - basename
const fn1 = path.basename(fullPath);
// console.log(__filename);
//현재 실행 중인 파일의 디렉토리 경로 + 파일이름 반환
console.log(`basename: ${fn1}`)

const fn2 = path.basename(fullPath, ".txt");
//문자열 부분 생략하고 출력
console.log(fn2)