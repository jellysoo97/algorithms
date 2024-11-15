// 스택의 마지막 값을 항상 넣으려는 값보다 큰 값으로 유지
// number 순회
//    현재값과 스택의 마지막 값 비교 -> 현재값이 스택의 마지막 값보다 작아질때까지 제거
//    스택에 값 추가
// k보다 덜 제거했을 경우가 있을 수 있음 -> 뒤에서부터 k개만큼 제거
function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }

  stack.splice(stack.length - k, k);

  return stack.join("");
}

solution("1924", 2);
solution("1231234", 3);
solution("18765432", 3);
solution("4177252841", 4);
