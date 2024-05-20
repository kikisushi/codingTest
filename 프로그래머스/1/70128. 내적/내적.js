function solution(a, b) {
   
    let answer = 0;
     //1. for문
    for(i=0; i<a.length; i++){
        //2. a와 b의 곱한 값을 더하기등호 연산자로 쌓기
       answer += a[i]*b[i]
    }
    
    return answer;
}