// 상하 이동과 좌우 이동은 독립사건, 이전 위치에서 이동하는게 아님
// 상하 이동
//    A부터의 거리, Z부터의 거리 중 최솟값
// 좌우 이동, 한바퀴를 최소의 이동으로 도는 경우
//    1. 오른쪽으로 이동
//    2. 오른쪽으로 이동하다가 a 만나면 방향 전환(왔다갔다 + 반대방향에서 pointer까지의 거리)
//    3. 왼쪽으로 이동하다가 a 만나면 방향 전환(2번의 반대)
function countVerticalMove(target) {
  const targetIndex = target.charCodeAt();

  return Math.min(
    targetIndex - "A".charCodeAt(),
    "Z".charCodeAt() + 1 - targetIndex
  );
}

function countHorizontalMove(name) {
  let minMove = name.length - 1; // 기본적으로 오른쪽으로만 이동

  name.split("").forEach((_, index) => {
    let pointer = index + 1;

    // 연속된 'A'의 끝 위치를 찾음
    while (pointer < name.length && name[pointer] === "A") pointer++;

    // 좌우 이동 거리 계산
    minMove = Math.min(
      minMove,
      index * 2 + name.length - pointer,
      index + 2 * (name.length - pointer)
    );
  });

  return minMove;
}

function solution(name) {
  let count = 0;

  count = [...name].reduce((acc, cur) => acc + countVerticalMove(cur), 0);
  count += countHorizontalMove(name);

  return count;
}

solution("BBBAABB");
solution("JAN");
solution("JEROEN");
