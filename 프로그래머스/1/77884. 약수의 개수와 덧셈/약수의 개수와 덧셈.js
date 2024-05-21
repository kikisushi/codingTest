function solution(left, right) {
  let answer = 0;
  for (i = left; i <= right; i++) {
    let count = 0;
    for (num = 1; num <= i; num++) {
      if (i % num == 0) {
        count += 1;
      }
    }
    count % 2 ? (answer -= i) : (answer += i);
  }
  return answer;
}
