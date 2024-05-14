function solution(x) {
    //1. x의 각 자리 수를 더하는 식 sum
    let sum = (""+x).split("").map(a=>a*1).reduce((a,b)=>a+b);
    //2. 삼항연산자
    let answer = x%sum  
    return !answer;
}
