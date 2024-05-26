function solution(n) {
  let trit= n.toString(3).split("").reverse().join("");
 return parseInt(trit,3)
}