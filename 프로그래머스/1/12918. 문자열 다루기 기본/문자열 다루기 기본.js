function solution(s) {
return (s.length == 4|| s.length ==6) &&
    s.split("").map(x => Number(x)).join("") === s ? true : false
}