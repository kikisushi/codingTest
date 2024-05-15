function solution(absolutes, signs) {
    //1. reduce()를 사용하여 absolutes 배열의 모든 요소 더하기
    //2. signs 배열의 거짓 참에 따라 삼항연산자를 사용하여 *1 :-1
    //3. reduce()의 초기값 0으로 설정, 생략가능
  return absolutes.reduce((acc,cur,idx) => acc + (cur *(signs[idx] ? 1 : -1)  ), 0)
}