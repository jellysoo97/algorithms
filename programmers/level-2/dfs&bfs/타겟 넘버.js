// dfs
//   인덱스 = numbers 길이 - 1이면 재귀 종료, 연산 결과값 == target이면 count+1
//   아니면 다음 인덱스에 대해 dfs 재귀, 연산 업데이트
function dfs(numbers, target, index, result, count) {
  if (index === numbers.length - 1) {
    if (result === target) count++;
    console.log(index, result, count);
    return;
  }

  dfs(numbers, target, index + 1, result + numbers[index], count);
  dfs(numbers, target, index + 1, result - numbers[index], count);
}

function solution(numbers, target) {
  dfs(numbers, target, 0, 0, 0);
}

solution([4, 1, 2, 1]);
