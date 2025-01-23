// 약수
// 약수 오름차순 정렬
// N이 짝수 -> 양끝의 곱
// N이 홀수 -> 가운데 인덱스 제곱
const fs = require("fs");
let [N, divisors] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

divisors = divisors.split(" ").map(Number);
divisors.sort((a, b) => a - b);
N = +N;

console.log(
  N % 2 === 0 ? divisors[0] * divisors[N - 1] : divisors[Math.floor(N / 2)] ** 2
);
