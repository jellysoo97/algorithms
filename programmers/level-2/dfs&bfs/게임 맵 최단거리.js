// bfs로 최단 거리 탐색
// bfs
//    큐에 시작 노드 추가
//    시작 노드 방문 처리
//    큐가 비어있지 않으면 인접 노드 순회
//        큐에서 현재 노드 빼기
//        현재 노드의 인접 노드 중 방문가능한 노드 선별 -> 경로를 벗어나지 않거나 벽이 아닌 노드
//        길이고 && 방문하지 않은 노드이면 큐에 추가
//        방문 처리 -> 현재 노드까지의 거리 + 1
function bfs(graph, visited, n, m, sx, sy) {
  const dir = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];

  queue.push([sx, sy]);
  visited[sx][sy]++;

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();

    for (const [dx, dy] of dir) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (nx < 0 || nx >= n || ny < 0 || ny >= m || graph[nx][ny] === 0)
        continue;

      if (graph[nx][ny] === 1 && !visited[nx][ny]) {
        queue.push([nx, ny]);
        visited[nx][ny] += visited[cx][cy] + 1;
      }
    }
  }
}

function solution(maps) {
  const [n, m] = [maps.length, maps[0].length];
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );

  bfs(maps, visited, n, m, 0, 0);

  return visited[n - 1][m - 1] || -1;
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);
solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]);
