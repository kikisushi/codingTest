function solution(arr1, arr2) {
    answer = []
for(i=0; i< arr1.length; i++){
    answer.push(arr1[i].map((value,idx)=> value + arr2[i][idx]))
    } 
    return answer
  }

