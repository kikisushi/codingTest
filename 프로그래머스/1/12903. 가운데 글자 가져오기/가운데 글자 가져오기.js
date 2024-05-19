function solution(s) {
// 짝수인 경우와 홀수인 경우 나누기
// 홀수인경우. 전체 길이 빼기 1 나누기 2의 인덱스
//짝수인경우 전체길이 나누기 2의 인덱스와 그보다 하나 작은 인덱스 반환
return s.length%2 == 0 ?
    s[(s.length/2)-1] + s[s.length/2] : s[(s.length-1)/2]

}