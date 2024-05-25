function solution(n, m) {
  let 공약수 = [];
  for (i = 1; i <= m; i++) {
    if ((n % i) + (m % i) === 0) {
      공약수.push(i);
    }
  }
  let 최대공약수 = 공약수.reduce((acc, cur) => Math.max(acc, cur));
  let 최소공배수 = (m * n) / 최대공약수;
  return [최대공약수, 최소공배수];
}
