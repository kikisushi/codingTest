function solution(arr) {
    //1. Math.min() 메서드와 spread 연산자로 배열의 가장 작은 값 찾기
    //2. filter()메서드로 (1)의 값을 제거한 새로운 배열 생성
    //3. 빈 배열일 경우 [-1]을 return
 let newArr = arr.filter((num)=> num !== Math.min(...arr)) 
  return newArr.length === 0 ? [-1] : newArr
}