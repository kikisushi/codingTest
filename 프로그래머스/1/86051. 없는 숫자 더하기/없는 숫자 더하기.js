function solution(numbers) {
    //1.numbers배열 안의 모든 데이터를 더한다.
    //2. 0부터 9까지 전부 더한 값==45 에서 (1)을 빼고 반환한다.
    return 45 - (numbers.reduce((a,b)=>a+b))
    50
}