function solution(number) {
    let answer = 0;
    for(i=0; i< number.length; i++){
        for(j=(i+1); j<number.length;j++){
            for(l=(j+1); l<number.length;l++){
              if( number[i]+number[j]+number[l] === 0){
                  answer += 1;
              }  
            }
        }
    }
  return answer;
}