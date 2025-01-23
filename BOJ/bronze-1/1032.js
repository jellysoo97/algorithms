// 명령 프롬프트
// 일치하지 않는 문자열은 ?로 변경
const fs = require("fs");
let [N, ...files] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const length = files[0].length;
let result = files[0].split("");

for (let i = 1; i < +N; i++) {
  for (let j = 0; j < length; j++) {
    if (files[i][j] !== result[j]) result[j] = "?";
  }
}

console.log(result.join(""));
