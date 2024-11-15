// dfs -> + or -
//   마지막 depth까지 연산하면(인덱스 === numbers 길이) 재귀 종료
//     연산 결과값 == target이면 count+1
//   아니면 다음 depth로(재귀 dfs) -> 인덱스, 연산 결과값 업데이트
function solution(numbers, target) {
  let count = 0;

  function dfs(index, result) {
    if (index === numbers.length) {
      if (result === target) count++;
      return;
    }

    dfs(index + 1, result + numbers[index]);
    dfs(index + 1, result - numbers[index]);
  }

  dfs(0, 0);

  return count;
}

solution([4, 1, 2, 1], 4);
