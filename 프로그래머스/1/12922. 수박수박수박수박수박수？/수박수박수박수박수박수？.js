function solution(n) {
    let answer = [];
    for(i=1; i<=n; i++){
        i%2 !== 0 ? answer.push("수") : answer.push('박')
    }
    return answer.join("")
}